import {
  Component,
  OnInit,
  ApplicationRef,
  ViewEncapsulation,
  Renderer2
} from '@angular/core';
import { AppService } from '../app/app.service';
import { Router } from '@angular/router';
import { HomeService } from './home.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  public pushsActive1;
  public pushsActive2;
  public pushsActive3;
  public categories;
  public collections;
  public pushCollectionActive = 0;
  public DISCOVER_TXT = 'discover';
  public lookbook = 'lookbook';
  public chains = 'chains';
  public charms = 'charms';

  public showULFooter;
  public showAll = true;
  public showAllHome = true;
  public showULHome;
  public showElementFooter;
  public showElementHome;

  public sliderVersionCompatibleIE;
  public sliderVersionCompatible;
  public sliderVersionTabletMobile;
  public sliderVersionMobile;
  public sliderVersionTablet;
  public hBlockHomeLeft;
  public center_svgW;
  public center_svgH;
  public center_maskImageW;
  public center_maskImageH;
  public center_ImageH;
  public center_ImageW;
  public center_ImageX;
  public center_ImageY;
  public right_svgW;
  public right_svgH;
  public right_maskImageW;
  public right_maskImageH;
  public right_ImageW;
  public right_ImageH;
  public right_ImageX;
  public right_ImageY;
  public maskHomeCenter;
  public maskHomeRight;

  public Filename;

  constructor(
    private appService: AppService,
    private appRef: ApplicationRef,
    private renderer: Renderer2,
    private router: Router,
    private homeService: HomeService,
    private authService: AuthService
  ) {
    if (this.appService.isBrowser) {
      this.appService.screenSizeProperty();
      this.renderer.addClass(document.body, 'colorBackground');
    }
    this.authService.token.subscribe(data => {
      if (data !== 'NOTSET') {
        this.homeService.getCat();
      }
    });
    this.homeService.data.subscribe(value => {
      if (value === 'change') {
        this.categories = [...this.homeService.categories];
        this.categories.forEach((cat, index) => {
          this.categories[index].hover = cat
            .replace(/&nbsp;/g, ' ')
            .replace('.retouralaligne.', '<br>');
        });
      }
    });
    this.homeService.collectionResult.subscribe(value => {
      this.collections = [...this.homeService.collection];
    });
  }

  ngOnInit() {
    if (this.appService.isBrowser) {
      console.log('hi this is browswer');
    }
    this.appService.changeInHome.subscribe(value => {
      if (value === 'change') {
        this.hBlockHomeLeft = this.appService.hBlockHomeLeft;
        this.sliderVersionCompatible = this.appService.sliderVersionCompatible;
        this.sliderVersionCompatibleIE = this.appService.sliderVersionCompatibleIE;
        this.sliderVersionTabletMobile = this.appService.sliderVersionTabletMobile;
        this.center_svgW = this.appService.center_svgW;
        this.center_svgH = this.appService.center_svgH;
        this.center_maskImageW = this.appService.center_maskImageW;
        this.center_maskImageH = this.appService.center_maskImageH;
        this.center_ImageW = this.appService.center_ImageW;
        this.center_ImageH = this.appService.center_ImageH;
        this.center_ImageX = this.appService.center_ImageX;
        this.center_ImageY = this.appService.center_ImageY;
        this.right_svgW = this.appService.right_svgW;
        this.right_svgH = this.appService.right_svgH;
        this.right_maskImageW = this.appService.right_maskImageW;
        this.right_maskImageH = this.appService.right_maskImageH;
        this.right_ImageW = this.appService.right_ImageW;
        this.right_ImageH = this.appService.right_ImageH;
        this.right_ImageX = this.appService.right_ImageX;
        this.right_ImageY = this.appService.right_ImageY;
        this.maskHomeCenter = this.appService.maskHomeCenter;
        this.maskHomeRight = this.appService.maskHomeRight;
        this.sliderVersionMobile = this.appService.sliderVersionMobile;
        this.sliderVersionTablet = this.appService.sliderVersionTablet;
      }
    });

    this.appService.changeInValues.subscribe(value => {
      if (value === 'change') {
        this.showULFooter = this.appService.showULFooter;
        this.showAll = this.appService.showAll;
        this.showAllHome = this.appService.showAllHome;
        this.showULHome = this.appService.showULHome;
        this.showElementFooter = this.appService.showElementFooter;
        this.showElementHome = this.appService.showElementHome;
      }
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

  pushToRight() {
    this.pushsActive1 = false;
    this.pushsActive3 = true;
    this.pushsActive2 = false;
    this.categories[0].name = this.DISCOVER_TXT;
  }
  pushToLeft() {
    this.pushsActive1 = true;
    this.pushsActive3 = false;
    this.pushsActive2 = false;
    this.categories[2].name = this.DISCOVER_TXT;
  }
  pushToCenter() {
    this.pushsActive1 = false;
    this.pushsActive3 = false;
    this.pushsActive2 = true;
    this.categories[1].name = this.DISCOVER_TXT;
  }

  pushFromRight() {
    this.pushsActive3 = false;
    this.categories[1].name = this.homeService.categories[1].name;
  }
  pushFromLeft() {
    this.pushsActive1 = false;
    this.categories[0].name = this.homeService.categories[0].name;
  }
  pushFromCenter() {
    this.pushsActive2 = false;
    this.categories[2].name = this.homeService.categories[2].name;
  }

  swipeLeftCarousel() {
    if (this.showElementHome !== 0) {
      this.showElementHome -= 1;
    } else {
      this.showElementHome = 2;
    }
  }

  swipeRightCarousel() {
    if (this.showElementHome !== 2) {
      this.showElementHome += 1;
    } else {
      this.showElementHome = 0;
    }
  }

  goToChains() {
    this.router.navigate(['chains']);
  }

  goToCharms() {
    this.router.navigate(['charms']);
  }

  goToPush(name, id) {
    this.router.navigate(['charms', 'category', name, id]);
  }

  goToLookbook() {}
}
