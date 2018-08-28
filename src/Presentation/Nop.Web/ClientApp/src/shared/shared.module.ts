import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { SocialComponent } from './social/social.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    SocialComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, FooterComponent, AboutComponent, SocialComponent]
})
export class SharedModule {}
