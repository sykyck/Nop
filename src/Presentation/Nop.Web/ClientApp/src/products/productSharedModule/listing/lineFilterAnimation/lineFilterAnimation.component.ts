import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../../../app/app.service';

@Component({
  selector: 'app-linefilteranimation',
  templateUrl: './lineFilterAnimation.component.html',
  styleUrls: ['./lineFilterAnimation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LineFilterComponent implements OnInit, OnDestroy {
  @Output()
  loadProducts = new EventEmitter();
  private _carouselItems;

  public filtreShow = true;

  public leftImage = 0;
  public activeMenu = 1;
  public elementActiveText = 'fashion';
  public elementSelected;
  public leftCarouselIndicator;

  private lien = '';
  private lastElementLeft = '';
  private distance;
  private countElementsLeft = 0;
  private distanceSlider = 100;

  constructor(
    private activeRoute: ActivatedRoute,
    private appService: AppService
  ) {}

  ngOnInit() {}

  @Input()
  set carouselItems(carouselItems) {
    this._carouselItems = carouselItems;
    if (this.appService.isBrowser) {
      const self = this;
      if (carouselItems != null) {
        setTimeout(function() {
          const widthButton = document.getElementById('element1Indicator')
            ? document.getElementById('element1Indicator').offsetWidth
            : undefined;
          self.leftCarouselIndicator = window.innerWidth / 2 - widthButton / 2;
          document.getElementById('element1Indicator')
            ? (document.getElementById('element1Indicator').style.marginLeft =
                window.innerWidth / 2 - widthButton / 2 + 'px')
            : '';
          const carouselCategoryElement = document.getElementById(
            'carousel-category-indicators-active'
          ).firstElementChild;
          if (carouselCategoryElement instanceof HTMLElement) {
            carouselCategoryElement.style.transform = 'none';
          }
        }, 500);

        const queryParams = this.activeRoute.snapshot.queryParams;

        setTimeout(function() {
          self.getDistanceIndicator();
          self.setPositionIndicators();
          self.setOrderIndicators();

          for (const key in self.carouselItems) {
            /* **** Filtre url ***** */
            if (queryParams.filter !== undefined) {
              const filtreSelection = queryParams.filter;
              if (filtreSelection === self.carouselItems[key].txt) {
                const el = document.getElementById(self.carouselItems[key].id)
                  .parentElement;
                el.click();
              }
            }
          }
        }, 1500);
      }
    }
  }

  get carouselItems() {
    return this._carouselItems;
  }

  swipeLeft(id, num) {
    if (this.appService.isBrowser) {
      if (num === this.carouselItems.length) {
        num = 2;
        this.swipeRight(id, num);
      } else {
        setTimeout(function() {
          const el = document.getElementById('element' + (num + 1))
            .parentElement;
          el.click();
        }, 0);
      }
    }
  }

  swipeRight(id, num) {
    if (this.appService.isBrowser) {
      if (num === 1) {
        num = this.carouselItems.length - 1;
        this.swipeLeft(id, num);
      } else {
        setTimeout(function() {
          const el: HTMLElement = document.getElementById('element' + (num - 1))
            .parentElement as HTMLElement;
          el.click();
        }, 10);
      }
    }
  }

  getOffset(el) {
    if (this.appService.isBrowser) {
      el = el.getBoundingClientRect();
      return {
        left: el.left + window.scrollX,
        top: el.top + window.scrollY
      };
    }
  }

  getDistanceIndicator() {
    if (this.appService.isBrowser) {
      this.distance = document.getElementById('element1Indicator')
        ? document.getElementById('element1Indicator').offsetWidth
        : undefined;
    }
  }

  setPositionIndicators() {
    if (this.appService.isBrowser) {
      this.countElementsLeft = 0;
      const widthWindow = window.innerWidth;
      this.carouselItems.forEach((value, key) => {
        const element = document.getElementById(value.id);
        if (element.offsetLeft <= widthWindow / 2) {
          element.setAttribute('position', 'left');
          this.countElementsLeft++;
        } else {
          element.setAttribute('position', 'right');
        }
      });
    }
  }

  setOrderIndicators() {
    if (this.appService.isBrowser) {
      const widthWindow = window.innerWidth;
      let iLeft = this.countElementsLeft - 1;
      let iRight = 1;

      this.carouselItems.forEach((value, key) => {
        const element = document.getElementById(value.id);
        if (element.getAttribute('position') === 'left') {
          element.setAttribute('order', '' + iLeft);
          iLeft--;
        }
        if (element.getAttribute('position') === 'right') {
          element.setAttribute('order', '' + iRight);
          iRight++;
        }
      });
    }
  }

  setActive(carouselItem, event, catId) {
    if (this.appService.isBrowser) {
      const widthWindow = window.innerWidth;
      this.loadProducts.emit(catId);
      this.activeMenu = carouselItem;
      this.elementActiveText = carouselItem;
      const click = event.screenX;

      const ElementActive = document.getElementById(carouselItem);
      const position = ElementActive.getAttribute('position');
      const order = ElementActive.getAttribute('order');

      if (click <= widthWindow / 2) {
        this.leftCarouselIndicator += parseInt(order, 10) * this.distance;
        this.leftImage += parseInt(order, 10) * 100;
      } else {
        this.leftCarouselIndicator -= parseInt(order, 10) * this.distance;
        this.leftImage -= parseInt(order, 10) * 100;
      }
      document.getElementById('element1Indicator').style.marginLeft =
        this.leftCarouselIndicator + 'px';
      const carouselCategoryElement = document.getElementById(
        'carousel-category-indicators-active'
      ).firstElementChild;
      if (carouselCategoryElement instanceof HTMLElement) {
        carouselCategoryElement.style.transform =
          'translateX(' + this.leftImage + '%)';
      }

      document.getElementById(carouselItem).classList.add('nohover');
      this.getDistanceIndicator();
      this.setPositionIndicators();
      this.setOrderIndicators();
      const self = this;
      setTimeout(function() {
        self.getDistanceIndicator();

        self.setPositionIndicators();
        self.setOrderIndicators();
        document.getElementById(carouselItem).classList.remove('nohover');
      }, 1100);
    }
  }

  ngOnDestroy() {}
}
