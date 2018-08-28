import {
  Component,
  OnInit,
  OnDestroy,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  trigger,
  transition,
  style,
  query,
  stagger,
  animate,
  keyframes
} from '@angular/animations';
import { AppService } from '../../../app/app.service';
import { CartService } from '../../../cart/cart.service';

@Component({
  selector: 'app-singleproduct',
  templateUrl: './singleProduct.component.html',
  styleUrls: ['./singleProduct.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('ngIfAnimation', [
      transition('void => *', [
        query('*', style({ opacity: 0 }), {
          optional: true
        }),
        query(
          '*',
          stagger('300ms', [
            animate(
              '0.8s 800ms ease-in',
              keyframes([
                style({ opacity: 0, transform: 'translateX(-75%)', offset: 0 }),
                style({
                  opacity: 0.5,
                  transform: 'translateX(35px)',
                  offset: 0.3
                }),
                style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
              ])
            )
          ]),
          { optional: true }
        )
      ]),
      transition('* => void', [
        query('*', style({ opacity: 1 }), {
          optional: true
        }),
        query(
          '*',
          stagger('300ms', [
            animate(
              '0.8s ease-in',
              keyframes([
                style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
                style({
                  opacity: 0.5,
                  transform: 'translateX(35px)',
                  offset: 0.3
                }),
                style({
                  opacity: 0,
                  transform: 'translateX(+75%)',
                  offset: 1.0
                })
              ])
            )
          ]),
          { optional: true }
        )
      ])
    ])
  ]
})
export class SingleProductComponent implements OnInit, OnDestroy {
  public _data;
  public description = '';
  public name = '';
  public prodPrice = '';
  public collection = '';
  public slides = [];
  public Vslide;
  public productId;

  public displayProdPriceLarge = false;
  public displayProdPriceSmall = false;
  public heightProduit;
  public displayProdCartBtnLarge;
  public displayProdCartBtnSmall;

  public visibleSlide = 0;

  constructor(
    private route: ActivatedRoute,
    private appService: AppService,
    private cartService: CartService
  ) {}

  @Input()
  set data(data) {
    this._data = data;
    if (data.Description) {
      this.description = data.Description;
      let descriptionMeta = data.Description;
      descriptionMeta = descriptionMeta.replace(/<(?:.|\n)*?>/gm, '');
      descriptionMeta = descriptionMeta.replace(/\u00a0/g, '');
      descriptionMeta = descriptionMeta.split('PRODUCT DETAIL');
      descriptionMeta = descriptionMeta[1];
      document
        .getElementById('description')
        .setAttribute('content', descriptionMeta);
      this.name = data.name;
      this.collection = data.sku;
      this.prodPrice = '₹ ' + data.Price;
      const MediaProduit = data.images;
      this.slides = [];
      MediaProduit.forEach((element, index) => {
        this.slides.push({
          src: element.src,
          alt: 'Product' + index
        });
      });
      this.Vslide = [{ ...this.slides[0] }];
    }
  }

  get data() {
    return this._data;
  }

  ngOnInit() {
    if (this.appService.isBrowser) {
      window.scrollTo(0, 0);
      /* *** Full Height if desktop or tablet *** */
      const w = window.innerWidth || document.documentElement.clientWidth;
      const h = window.innerHeight || document.documentElement.clientHeight;
      const headerH = document.getElementById('header').clientHeight;

      /* Layout Height */
      if (w > 768) {
        this.heightProduit = Math.round(h) - Math.round(headerH);
      } else {
        this.heightProduit = 'auto';
      }

      /* Product Price & Cart Btn */
      if (w > 1024) {
        this.displayProdPriceLarge = true;
        this.displayProdPriceSmall = false;
        this.displayProdCartBtnLarge = true;
        this.displayProdCartBtnSmall = false;
      } else {
        this.displayProdPriceLarge = false;
        this.displayProdPriceSmall = true;
        this.displayProdCartBtnLarge = false;
        this.displayProdCartBtnSmall = true;
      }
    }
  }

  changeSlide(x, y) {
    this.visibleSlide = x;
    this.Vslide = [];
    const self = this;
    setTimeout(() => {
      self.Vslide = [{ ...y }];
    }, 1100);
  }

  addToCart() {
    this.cartService.addToCart({ ...this.data, src: this.data.images[0].src });
  }

  gotocharms() {}

  ngOnDestroy() {}
}
