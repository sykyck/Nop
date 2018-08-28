import { Component, OnDestroy, Renderer2, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-care',
  templateUrl: './care.component.html',
  styleUrls: ['./care.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CareComponent implements OnDestroy, OnInit {
  public page;
  constructor(
    private sanitizer: DomSanitizer,
    private renderer: Renderer2,
    private info: InfoService
  ) {
    this.renderer.addClass(document.body, 'colorBackground');
  }

  ngOnInit() {
    this.info.fetchCare();
    this.info.care.subscribe(data => {
      const first = data.indexOf('class="page-body"');
      const second = data.indexOf('</div>', first);
      this.page = this.sanitizer.bypassSecurityTrustHtml(
        data.substring(first + 18, second)
      );
    });
  }

  ngOnDestroy() {
    this.renderer.removeClass(document.body, 'colorBackground');
  }
}
