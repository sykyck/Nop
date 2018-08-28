import { Component } from '@angular/core';
import { AppService } from './app.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private appService: AppService,
    private authService: AuthService
  ) {
    this.authService.authInit();
    if (this.appService.isBrowser) {
      this.appService.resizeHomePage();
      this.appService.screenSizeProperty();
    }
  }
}
