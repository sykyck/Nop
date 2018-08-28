import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LegalsRoutingModule } from './legalsRouting.module';

import { LegalsComponent } from './legals.component';
import { LegalService } from './legals.service';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [LegalsComponent, ContentComponent],
  imports: [CommonModule, HttpClientModule, LegalsRoutingModule],
  providers: [LegalService]
})
export class LegalsModule {}
