import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { ChainsService } from '../chains.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-chainsitem',
  templateUrl: './chainsItem.component.html',
  styleUrls: ['./chainsItem.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChainsItemComponent implements OnInit, OnDestroy {
  public url = encodeURIComponent(window.location.href);
  public product;
  public relatedProducts;
  public productId;
  constructor(
    private chainsService: ChainsService,
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
    this.chainsService.getProduct(id);
    this.chainsService.loadProducts(3, null);
    this.chainsService.productFetched.subscribe(data => {
      this.product = data;
    });
    this.chainsService.productsList.subscribe(value => {
      this.relatedProducts = value;
    });
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
