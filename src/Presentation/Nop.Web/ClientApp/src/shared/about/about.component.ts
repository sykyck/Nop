import { Component, OnDestroy, Renderer2, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [AboutService],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnDestroy, OnInit {
  public page;
  constructor(
    private sanitizer: DomSanitizer,
    private renderer: Renderer2,
    private aboutService: AboutService
  ) {
    this.renderer.addClass(document.body, 'colorBackground');
  }

  ngOnInit() {
    this.aboutService.fetchAbout();
    this.aboutService.about.subscribe(data => {
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
