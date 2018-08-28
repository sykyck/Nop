import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { CharmsService } from '../charms.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-charmsitem',
  templateUrl: './charmsItem.component.html',
  styleUrls: ['./charmsItem.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CharmsItemComponent implements OnInit, OnDestroy {
  public url = encodeURIComponent(window.location.href);
  public product;
  public relatedProducts;
  public productId;
  constructor(
    private charmsService: CharmsService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.token.subscribe(token => {
      if (token !== 'NOTSET') {
        this.route.params.subscribe(value => {
          this.productId = value.id;
          this.fetchData(value.id);
        });
      }
    });
  }

  fetchData(id) {
    this.charmsService.getProduct(id);
    this.charmsService.loadProducts(1, null);
    this.charmsService.productFetched.subscribe(data => {
      this.product = data;
    });
    this.charmsService.productsList.subscribe(value => {
      this.relatedProducts = value;
    });
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
