import { NgModule } from '@angular/core';
import { InfoComponent } from './info.component';
import { CommonModule } from '@angular/common';
import { InfoRoutingModule } from './infoRouting.module';
import { ContentComponent } from './content/content.component';
import { InfoService } from './info.service';
import { CareComponent } from './care/care.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [InfoComponent, ContentComponent, CareComponent, ContactComponent],
  imports: [CommonModule, InfoRoutingModule],
  providers: [InfoService]
})
export class InfoModule {}
