import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app/app.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public postalCodeInput = false;
  public showAll;
  public postalCodeMsg = 0;
  public showElementFooter;
  public showULFooter;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.showAll = this.appService.showAll;
    this.showElementFooter = this.appService.showElementFooter;
    this.showULFooter = this.appService.showULFooter;
    this.appService.changeInHome.subscribe(value => {
      if (value === 'change') {
        this.showAll = this.appService.showAll;
        this.showElementFooter = this.appService.showElementFooter;
        this.showULFooter = this.appService.showULFooter;
      }
    });
  }

  checkFlag(i) {
    return true;
  }

  checkPostalCode() {}
}
