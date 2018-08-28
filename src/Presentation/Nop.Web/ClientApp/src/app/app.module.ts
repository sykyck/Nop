import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from '../Home/home.component';
import { AppRoutingModule } from './appRouting.module';
import { LegalsModule } from '../Legals/legals.module';
import { InfoModule } from '../info/info.module';
import { AppService } from './app.service';
import { RouterModule } from '@angular/router';
import { CharmsModule } from '../products/charms/charms.module';
import { ChainsModule } from '../products/chains/chains.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { HomeService } from '../Home/home.service';
import { CartService } from '../cart/cart.service';
import { CartComponent } from '../cart/cart.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, CartComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    RouterModule,
    SharedModule,
    AppRoutingModule,
    LegalsModule,
    InfoModule,
    CharmsModule,
    ChainsModule
  ],
  providers: [AppService, AuthService, HomeService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule {}
