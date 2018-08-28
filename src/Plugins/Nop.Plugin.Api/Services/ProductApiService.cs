using System;
using System.Collections.Generic;
using System.Linq;
using Nop.Core.Data;
using Nop.Core.Domain.Catalog;
using Nop.Core.Domain.Vendors;
using Nop.Plugin.Api.Constants;
using Nop.Plugin.Api.DataStructures;
using Nop.Services.Stores;
using Microsoft.EntityFrameworkCore;
using Nop.Services.Catalog;
using Nop.Core;
using Nop.Core.Caching;
using Nop.Services.Localization;
using Nop.Plugin.Api.DTOs.Products;

namespace Nop.Plugin.Api.Services
{
    public class ProductApiService : IProductApiService
    {
        private readonly IStoreMappingService _storeMappingService;
        private readonly IRepository<Product> _productRepository;
        private readonly IRepository<ProductCategory> _productCategoryMappingRepository;
        private readonly IRepository<Vendor> _vendorRepository;
        private readonly IProductService _productService;
        private readonly IWorkContext _workContext;
        private readonly ISpecificationAttributeService _specificationAttributeService;
        private readonly ICacheManager _cacheManager;
        private readonly ICategoryService _categoryService;
        protected readonly ILocalizationService _localizationService;

        private const string SPECS_FILTER_MODEL_KEY = "Nop.pres.filter.specs-{0}-{1}";

        public ProductApiService(IRepository<Product> productRepository,
            IRepository<ProductCategory> productCategoryMappingRepository,
            IRepository<Vendor> vendorRepository,
            IStoreMappingService storeMappingService,
            IProductAttributeService productAttributeService,
            IWorkContext workContext,
            ISpecificationAttributeService specificationAttributeService,
            ICacheManager cacheManager,
            ILocalizationService localizationService,
            ICategoryService categoryService,
            IProductService productService)
        {
            _productRepository = productRepository;
            _productCategoryMappingRepository = productCategoryMappingRepository;
            _vendorRepository = vendorRepository;
            _storeMappingService = storeMappingService;
            _productService = productService;
            _specificationAttributeService = specificationAttributeService;
            _cacheManager = cacheManager;
            _workContext = workContext;
            _localizationService = localizationService;
            _categoryService = categoryService;
        }

        public IList<Product> GetProducts(out IList<SpecificationItemDto> alreadyFilteredItems,
            out IList<SpecificationItemDto> notFilteredItems,
            IList<int> ids = null,
            DateTime? createdAtMin = null, DateTime? createdAtMax = null, DateTime? updatedAtMin = null, DateTime? updatedAtMax = null,
           int limit = Configurations.DefaultLimit, int page = Configurations.DefaultPageValue, int sinceId = Configurations.DefaultSinceId,
           int? categoryId = null, string vendorName = null, bool? publishedStatus = null, IList<int> alreadyFilteredSpecOptionIds = null)
        {
            if (alreadyFilteredSpecOptionIds == null)
            {
                alreadyFilteredSpecOptionIds = new List<int>();
            }
            var categoryIds = categoryId != null ? new List<int> { categoryId.Value } : null;

            if (categoryIds != null)
            {
                categoryIds.AddRange(_categoryService.GetChildCategoryIds(parentCategoryId: categoryId.Value));
            }
            var products = _productService.SearchProducts(out IList<int> filterableSpecificationAttributeOptionIds,
                    loadFilterableSpecificationAttributeOptionIds: true,
                    pageIndex: page - 1,
                    pageSize: limit,
                    categoryIds: categoryIds,
                    filteredSpecs: alreadyFilteredSpecOptionIds
                );

            var optionIds = filterableSpecificationAttributeOptionIds != null
                    ? string.Join(",", filterableSpecificationAttributeOptionIds) : string.Empty;
            var cacheKey = string.Format(SPECS_FILTER_MODEL_KEY, optionIds, _workContext.WorkingLanguage.Id);

            var allOptions = _specificationAttributeService.GetSpecificationAttributeOptionsByIds(filterableSpecificationAttributeOptionIds.ToArray());
            var allFilters = _cacheManager.Get(cacheKey, () => allOptions.Select(sao =>
                new SpecificationAttributeOptionFilter
                {
                    SpecificationAttributeId = sao.SpecificationAttribute.Id,
                    SpecificationAttributeName = _localizationService.GetLocalized(sao.SpecificationAttribute, x => x.Name, _workContext.WorkingLanguage.Id),
                    SpecificationAttributeDisplayOrder = sao.SpecificationAttribute.DisplayOrder,
                    SpecificationAttributeOptionId = sao.Id,
                    SpecificationAttributeOptionName = _localizationService.GetLocalized(sao, x => x.Name, _workContext.WorkingLanguage.Id),
                    SpecificationAttributeOptionColorRgb = sao.ColorSquaresRgb,
                    SpecificationAttributeOptionDisplayOrder = sao.DisplayOrder
                }).ToList());

            if (allFilters.Any())
            {
                //sort loaded options
                allFilters = allFilters.OrderBy(saof => saof.SpecificationAttributeDisplayOrder)
                    .ThenBy(saof => saof.SpecificationAttributeName)
                    .ThenBy(saof => saof.SpecificationAttributeOptionDisplayOrder)
                    .ThenBy(saof => saof.SpecificationAttributeOptionName).ToList();
            }

            //prepare the model properties

            //get already filtered specification options
            var alreadyFilteredOptions = allFilters.Where(x => alreadyFilteredSpecOptionIds.Contains(x.SpecificationAttributeOptionId));
            alreadyFilteredItems = alreadyFilteredOptions.Select(x =>
                new SpecificationItemDto
                {
                    SpecificationAttributeOptionId = x.SpecificationAttributeOptionId,
                    SpecificationAttributeName = x.SpecificationAttributeName,
                    SpecificationAttributeOptionName = x.SpecificationAttributeOptionName,
                    SpecificationAttributeOptionColorRgb = x.SpecificationAttributeOptionColorRgb,
                    SpecificationAttributeFilterIds = string.Join(',', alreadyFilteredSpecOptionIds.Where(i => i != x.SpecificationAttributeOptionId))
                }).ToList();

            //get not filtered specification options
            notFilteredItems = allFilters.Except(alreadyFilteredOptions).Select(x =>
            {
                //filter URL
                var alreadyFiltered = alreadyFilteredSpecOptionIds.Concat(new List<int> { x.SpecificationAttributeOptionId });

                return new SpecificationItemDto
                {
                    SpecificationAttributeOptionId = x.SpecificationAttributeOptionId,
                    SpecificationAttributeName = x.SpecificationAttributeName,
                    SpecificationAttributeOptionName = x.SpecificationAttributeOptionName,
                    SpecificationAttributeOptionColorRgb = x.SpecificationAttributeOptionColorRgb,
                    SpecificationAttributeFilterIds = string.Join(',', alreadyFiltered)
                };
            }).ToList();

            return products;
        }
        
        public int GetProductsCount(DateTime? createdAtMin = null, DateTime? createdAtMax = null, 
            DateTime? updatedAtMin = null, DateTime? updatedAtMax = null, bool? publishedStatus = null, string vendorName = null, 
            int? categoryId = null)
        {
            var query = GetProductsQuery(createdAtMin, createdAtMax, updatedAtMin, updatedAtMax, vendorName,
                                         publishedStatus, categoryId: categoryId);

            return query.ToList().Count(p => _storeMappingService.Authorize(p));
        }

        public Product GetProductById(int productId)
        {
            if (productId == 0)
                return null;

            return _productRepository.Table.FirstOrDefault(product => product.Id == productId && !product.Deleted);
        }

        public Product GetProductByIdNoTracking(int productId)
        {
            if (productId == 0)
                return null;

            return _productRepository.TableNoTracking.FirstOrDefault(product => product.Id == productId && !product.Deleted);
        }

        private IQueryable<Product> GetProductsQuery(DateTime? createdAtMin = null, DateTime? createdAtMax = null, 
            DateTime? updatedAtMin = null, DateTime? updatedAtMax = null, string vendorName = null, 
            bool? publishedStatus = null, IList<int> ids = null, int? categoryId = null)
            
        {
            var query = _productRepository.Table;

            if (ids != null && ids.Count > 0)
            {
                query = query.Where(c => ids.Contains(c.Id));
            }

            if (publishedStatus != null)
            {
                query = query.Where(c => c.Published == publishedStatus.Value);
            }

            // always return products that are not deleted!!!
            query = query.Where(c => !c.Deleted);

            if (createdAtMin != null)
            {
                query = query.Where(c => c.CreatedOnUtc > createdAtMin.Value);
            }

            if (createdAtMax != null)
            {
                query = query.Where(c => c.CreatedOnUtc < createdAtMax.Value);
            }

            if (updatedAtMin != null)
            {
               query = query.Where(c => c.UpdatedOnUtc > updatedAtMin.Value);
            }

            if (updatedAtMax != null)
            {
                query = query.Where(c => c.UpdatedOnUtc < updatedAtMax.Value);
            }

            if (!string.IsNullOrEmpty(vendorName))
            {
                query = from vendor in _vendorRepository.TableNoTracking
                        join product in _productRepository.TableNoTracking on vendor.Id equals product.VendorId
                        where vendor.Name == vendorName && !vendor.Deleted && vendor.Active
                        select product;
            }

            //only distinct products (group by ID)
            query = from p in query
                    group p by p.Id
                        into pGroup
                    orderby pGroup.Key
                    select pGroup.FirstOrDefault();

            if (categoryId != null)
            {
                var categoryMappingsForProduct = from productCategoryMapping in _productCategoryMappingRepository.TableNoTracking
                                                 where productCategoryMapping.CategoryId == categoryId
                                                 select productCategoryMapping;

                query = from product in query
                        join productCategoryMapping in categoryMappingsForProduct on product.Id equals productCategoryMapping.ProductId
                        select product;
            }

            query = query.OrderBy(product => product.Id);

            return query;
        }
    }
}