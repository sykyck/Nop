import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Subscriber } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class ChainsService {
  public carouselItems: BehaviorSubject<any> = new BehaviorSubject([]);
  public characteristicsList: BehaviorSubject<any> = new BehaviorSubject([]);
  public filters: BehaviorSubject<any> = new BehaviorSubject([]);
  public productsList: BehaviorSubject<any> = new BehaviorSubject([]);
  public productFetched: BehaviorSubject<any> = new BehaviorSubject([]);
  public Filters = [];
  public products = [];
  public product;
  public token;
  public httpOptions;
  constructor(private http: HttpClient, private authService: AuthService) {
    this.authService.token.subscribe(token => {
      if (token !== 'NOTSET') {
        this.token = token;
        this.httpOptions = {
          headers: new HttpHeaders({
            accept: '*',
            Authorization: `Bearer ${token}`
          })
        };
      }
    });
  }

  fetchCategories() {
    this.http.get('/api/categories/', this.httpOptions).subscribe(data => {
      const categoriesList = [];
      (data as any).categories.forEach(cat => {
        if (cat.id === 1) {
          const Obj = {
            catId: 1,
            id: 'element1',
            img: cat.image.src,
            num: 1,
            txt: 'All'
          };
          categoriesList.unshift(Obj);
        } else if (cat.parent_category_id === 1) {
          const Obj = {
            catId: cat.id,
            id: `element` + categoriesList.length,
            img: cat.image.src,
            num: categoriesList.length,
            txt: cat.name
          };
          categoriesList.push(Obj);
        }
      });
      this.carouselItems.next(categoriesList);
    });
  }

  loadProducts(category, filter) {
    let url = '/api/products?category_id=' + category;
    if (filter != null) {
      url = url + '&alreadyfiltered_specoption_ids=' + filter;
    }
    this.http.get(url + category, this.httpOptions).subscribe(data => {
      const filters = [];

      const addFilter = (obj, el) => {
        let counter = true;
        filters.forEach((item, index) => {
          if (item[0].Name === el.attribute_name) {
            filters[index].push({ ...obj });
            counter = false;
          }
        });
        if (counter) {
          filters.push([{ ...obj }]);
          filters[filters.length - 1].selected = { Name: el.attribute_name };
          filters[filters.length - 1].menuActive = false;
        }
      };

      (data as any).notFilteredItems.forEach((item, i) => {
        const obj = {
          CharacteristicId: item.attribute_option_id,
          Reference: null,
          Name: item.attribute_option_name,
          CharacteristicTypeCode: item.attribute_name,
          disabled: false,
          link: item.attribute_filterIds
        };
        addFilter(obj, item);
      });

      (data as any).alreadyFilteredItems.forEach((item, i) => {
        const obj = {
          CharacteristicId: item.attribute_option_id,
          Reference: null,
          Name: item.attribute_option_name,
          CharacteristicTypeCode: item.attribute_name,
          disabled: true,
          link: item.attribute_filterIds
        };
        addFilter(obj, item);
      });
      this.Filters = filters;
      this.characteristicsList.next(filters);

      const productsList = [];
      (data as any).products.forEach(item => {
        const Obj = {
          alt: item.name,
          id: parseInt(item.id, 10),
          src: item.image.src,
          title: item.name,
          price: item.price
        };
        productsList.push(Obj);
      });
      this.productsList.next(this.products);
    });
  }

  getProduct(id) {
    this.http.get('/api/products?category_id=' + id).subscribe(data => {
      this.product = data;
      this.productFetched.next(data);
    });
  }
}
