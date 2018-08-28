import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { CharmsService } from '../charms.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-charmslisting',
  templateUrl: './charmsListing.component.html',
  styleUrls: ['./charmsListing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CharmsListingComponent implements OnInit, OnDestroy {
  public elementSelected = [];
  public carouselItems;
  public filters;
  public products;
  public category;
  constructor(
    private charmsService: CharmsService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.token.subscribe(token => {
      if (token !== 'NOTSET') {
        this.charmsService.fetchCategories();
        this.charmsService.carouselItems.subscribe(result => {
          this.carouselItems = result;
          console.log(result);
        });
        this.charmsService.loadProducts(1, null);
        this.charmsService.filters.subscribe(data => {
          this.filters = data;
        });
        this.charmsService.productsList.subscribe(value => {
          this.products = value;
        });
      }
    });
  }

  loadProducts(event) {
    this.category = event;
    this.charmsService.loadProducts(event, null);
  }

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
