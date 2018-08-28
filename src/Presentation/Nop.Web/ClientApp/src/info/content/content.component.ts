import {
  Component,
  OnInit,
  OnChanges,
  OnDestroy,
  Renderer2
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContentComponent implements OnInit, OnDestroy {
  public page;
  public pageSubscription;
  constructor(
    private info: InfoService,
    private sanitizer: DomSanitizer,
    private router: Router,
    private renderer: Renderer2
  ) {
    this.renderer.addClass(document.body, 'picBackground');
  }

  ngOnInit() {
    const router = this.router.url;
    switch (router) {
      case '/info/productInformation':
        this.info.fetchProductInformation();
        this.pageSubscription = this.info.productionInformation;
        break;
      case '/info/deliveryReturns':
        this.info.fetchDelivery();
        this.pageSubscription = this.info.delivery;
        break;
      case '/info/warningAboutForgery':
        this.info.fetchWarningAboutForgery();
        this.pageSubscription = this.info.warningAboutForgery;
        break;
      case '/info/productionCondition':
        this.info.fetchProductCondition();
        this.pageSubscription = this.info.productCondition;
        break;
      case '/info/faq':
        this.info.fetchFAQ();
        this.pageSubscription = this.info.faq;
        break;

      default:
        break;
    }

    this.pageSubscription.subscribe(data => {
      const first = data.indexOf('class="page-body"');
      const second = data.indexOf('</div>', first);
      this.page = this.sanitizer.bypassSecurityTrustHtml(
        data.substring(first + 18, second)
      );
    });
  }

  ngOnDestroy() {
    this.pageSubscription.unsubscribe();
    this.renderer.removeClass(document.body, 'picBackground');
  }
}
