using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace Nop.Plugin.Api.DTOs.Products
{
    public class ProductsRootObjectDto : ISerializableObject
    {
        public ProductsRootObjectDto()
        {
            Products = new List<ProductDto>();
        }

        [JsonProperty("products")]
        public IList<ProductDto> Products { get; set; }

        [JsonProperty("alreadyFilteredItems")]
        public IList<SpecificationItemDto> AlreadyFilteredItems { get; set; }

        [JsonProperty("notFilteredItems")]
        public IList<SpecificationItemDto> NotFilteredItems { get; set; }

        /// <summary>
        /// Gets or sets the page size
        /// </summary>
        [JsonProperty("page_size")]
        public int PageSize { get; set; }

        /// <summary>
        /// Gets or sets the page size
        /// </summary>
        [JsonProperty("page")]
        public int Page { get; set; }

        public string GetPrimaryPropertyName()
        {
            return "products";
        }

        public Type GetPrimaryPropertyType()
        {
            return typeof (ProductDto);
        }
    }
}