import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class CartService {
  public localCart = [];
  public TOTALNormal = '0.00';
  public SGST = '0.00';
  public cartListTotalPrice = '0.00';
  public cartUpdated = new Subject();

  constructor(private http: HttpClient) {}

  addToCart(product) {
    let itemCheck = false;
    this.localCart.forEach((item, index) => {
      if (item.id === product.id) {
        itemCheck = true;
        this.localCart[index].qty = this.localCart[index].qty + 1;
        this.checkPrice();
      }
    });
    if (!itemCheck) {
      const Obj = { ...product, qty: 1 };
      this.localCart.push({ ...Obj });
      this.checkPrice();
    }
  }

  checkPrice() {
    let total = 0;
    this.localCart.forEach(product => {
      total = total + product.price * product.qty;
    });
    this.TOTALNormal = '' + total;
    this.SGST = '' + (0.03 * total).toFixed(2);
    this.cartListTotalPrice = '' + (total * 1.03).toFixed(2);
    this.cartUpdated.next('');
  }

  changeQty(productId, qty) {
    this.localCart.forEach((item, index) => {
      if (item.id === productId) {
        this.localCart[index].qty = qty;
        this.checkPrice();
      }
    });
  }
}
