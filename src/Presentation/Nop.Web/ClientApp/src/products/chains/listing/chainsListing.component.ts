import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ChainsService } from '../chains.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-chainslisting',
  templateUrl: './chainsListing.component.html',
  styleUrls: ['./chainsListing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChainsListingComponent implements OnInit, OnDestroy {
  public elementSelected = [];
  public carouselItems;
  public filters;
  public products;
  public category;
  constructor(
    private chainsService: ChainsService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.token.subscribe(token => {
      if (token !== 'NOTSET') {
        this.chainsService.fetchCategories();
        this.chainsService.carouselItems.subscribe(result => {
          this.carouselItems = result;
          console.log(result);
        });
        this.chainsService.loadProducts(3, null);
        this.chainsService.filters.subscribe(data => {
          this.filters = data;
        });
        this.chainsService.productsList.subscribe(value => {
          this.products = value;
        });
      }
    });
  }

  loadProducts(event) {
    this.chainsService.loadProducts(event, null);
  }

  fetchFilteredProducts(event) {
    this.chainsService.loadProducts(this.category, event.filter);
  }

  toProduit(id, name, event) {
    name = name.split(' ');
    const index = name.indexOf('-');
    name.splice(index, 1);
    name = name.join('-');
    this.router.navigate(['chains', id, name]);
  }

  ngOnDestroy() {}
}
