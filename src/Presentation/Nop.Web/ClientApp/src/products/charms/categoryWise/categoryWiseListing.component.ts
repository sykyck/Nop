import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { CharmsService } from '../charms.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-categorywiselisting',
  templateUrl: './categoryWiseListing.component.html',
  styleUrls: ['./categoryWiseListing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CategoryWiseListingComponent implements OnInit, OnDestroy {
  public elementSelected = [];
  public carouselItems;
  public filters;
  public products;
  public characterisitcsId = [];
  public catName;
  public catId;
  constructor(
    private charmsService: CharmsService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.token.subscribe(token => {
      if (token !== 'NOTSET') {
        this.route.params.subscribe(value => {
          this.catName = value.name;
          this.catId = value.id;
          this.charmsService.fetchCategories();
          this.charmsService.loadProducts(value.id, null);
        });
        this.charmsService.carouselItems.subscribe(result => {
          let obj = result.find(function (element) {
            return element.catId === this.catId;
          });
          const element = {
            num: 1,
            catId: 1,
            id: 'element1',
            txt: obj.name,
            img: obj.img
          };
          this.carouselItems = [{ ...element }];
        });
        this.charmsService.filters.subscribe(data => {
          this.filters = data;
        });
        this.charmsService.productsList.subscribe(value => {
          this.products = value;
        });
      }
    });
  }

  loadProducts() {}

  fetchFilteredProducts(event) {
    this.charmsService.loadProducts(event.category, event.filter);
  }

  toProduit(id, name, event) {
    name = name.split(' ');
    const index = name.indexOf('-');
    name.splice(index, 1);
    name = name.join('-');
    this.router.navigate(['charms', id, name]);
  }

  ngOnDestroy() {}
}
