import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app/app.service';
import { CartService } from '../../cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isOpen = false;
  public isOpenSearch = false;
  public isOpenPanier = false;
  public isOpenAccount = false;
  public numberItemsPanier = 0;

  public charms = 'Charms';
  public chains = 'Chains';
  public lookbook = 'Lookbook';

  public sliderVersionTabletMobile;

  public cartItems;

  public Filename;
  public StepBag;

  constructor(
    private router: Router,
    private appService: AppService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.cartItems = this.cartService.localCart.length;
    this.sliderVersionTabletMobile = this.appService.sliderVersionTabletMobile;
    this.appService.changeInHome.subscribe(value => {
      if (value === 'change') {
        this.sliderVersionTabletMobile = this.appService.sliderVersionTabletMobile;
      }
    });
    this.cartService.cartUpdated.subscribe(value => {
      this.cartItems = this.cartService.localCart.length;
    });
  }

  getExtension(path) {
    if (path !== undefined) {
      try {
        const basename = path.split(/[\\/]/).pop();
        const pos = basename.lastIndexOf('.');
        if (basename === '' || pos < 1) {
          return '';
        }
        return basename.slice(pos + 1);
      } catch (e) {
        console.warn(path, e);
        return '';
      }
    } else {
      return '';
    }
  }

  aboutClick() {
    this.router.navigate(['about']);
    this.isOpen = false;
  }

  goToChains() {
    this.router.navigate(['chains']);
    this.isOpen = false;
  }

  goToCharms() {
    this.router.navigate(['charms']);
    this.isOpen = false;
  }

  goToLookbook() {}

  openSearch() {}

  openAccountPopup() {}
}
