import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { AppService } from '../../app/app.service';

@Component({
  selector: 'app-chains',
  templateUrl: './chains.component.html',
  styleUrls: ['./chains.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChainsComponent implements OnInit, OnDestroy {
  public leftCarouselText;
  constructor(private appService: AppService) { }

  ngOnInit() {
    if (this.appService.isBrowser) {
      if (window.innerWidth < 1024) {
        this.leftCarouselText = '-195%';
        if (window.innerWidth < 500) {
          this.leftCarouselText = '-55%';
          if (window.innerWidth <= 400) {
            this.leftCarouselText = '-56%';
          }
        }
      } else {
      }
      let width = window.innerWidth;
      window.addEventListener('resize', function (e) {
        e.stopPropagation();
        if (window.innerWidth === width) {
          return;
        }
        width = window.innerWidth;
        window.location.reload();
      });
    }
  }

  ngOnDestroy() {}
}
