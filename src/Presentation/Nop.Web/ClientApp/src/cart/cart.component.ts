import { Component, OnDestroy, Renderer2, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CartComponent implements OnDestroy, OnInit {
  public cartList;
  public TOTALNormal = '0.00';
  public SGST = '0.00';
  public DiscountTTC;
  public priceDeliveryChoix = '0.00';

  public mailIncorrectPanier;
  public fieldRequiredPanier;
  public EmailEnvoyePanier;

  public showCodePromo;
  public requiredCodePromo;
  public invalidCodeMsg;

  public quantityDropdown = false;

  public cartListTotalPrice = '0.00';
  constructor(private renderer: Renderer2, private cartService: CartService) {
    this.renderer.addClass(document.body, 'colorBackground');
  }

  ngOnInit() {
    this.cartList = this.cartService.localCart;
    this.SGST = this.cartService.SGST;
    this.TOTALNormal = this.cartService.TOTALNormal;
    this.cartListTotalPrice = this.cartService.cartListTotalPrice;
    this.cartService.cartUpdated.subscribe(value => {
      this.cartList = this.cartService.localCart;
      this.SGST = this.cartService.SGST;
      this.TOTALNormal = this.cartService.TOTALNormal;
      this.cartListTotalPrice = this.cartService.cartListTotalPrice;
      console.log(this.cartList);
    });
  }

  changeQuantityPanier(id, qty) {
    this.cartService.changeQty(id, qty);
  }

  toProduit() {}

  sendPanier() {}

  promoCheck() {}

  stepBagClick() {}

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'colorBackground');
  }
}
