import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';
import { LegalService } from '../legals.service';

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
    private legals: LegalService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}

  ngOnInit() {
    const router = this.router.url;
    switch (router) {
      case '/legals/privacy':
        this.legals.fetchPrivacy();
        this.pageSubscription = this.legals.privacy;
        break;
      case '/legals/pricesAndPayment':
        this.legals.fetchPricesAndPayment();
        this.pageSubscription = this.legals.pricesAndPayment;
        break;
      case '/legals/shippingAndDelivery':
        this.legals.fetchShipping();
        this.pageSubscription = this.legals.shipping;
        break;
      case '/legals/service':
        this.legals.fetchService();
        this.pageSubscription = this.legals.service;
        break;
      case '/legals/terms':
        this.legals.fetchTerms();
        this.pageSubscription = this.legals.terms;
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
  }
}
