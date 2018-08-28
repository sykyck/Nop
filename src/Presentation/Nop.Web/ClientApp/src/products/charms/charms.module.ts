import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductSharedModule } from '../productSharedModule/productShared.module';
import { CharmsComponent } from './charms.component';
import { CharmsItemComponent } from './Item/charmsItem.component';
import { CharmsListingComponent } from './Listing/charmsListing.component';
import { CharmsRoutingModule } from './charmsRouting.module';
import { CharmsService } from './charms.service';
import { CategoryWiseListingComponent } from './categoryWise/categoryWiseListing.component';

@NgModule({
  declarations: [
    CharmsComponent,
    CharmsItemComponent,
    CharmsListingComponent,
    CategoryWiseListingComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductSharedModule,
    CharmsRoutingModule
  ],
  providers: [CharmsService]
})
export class CharmsModule {}
