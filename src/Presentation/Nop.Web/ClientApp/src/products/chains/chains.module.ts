import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductSharedModule } from '../productSharedModule/productShared.module';
import { ChainsRoutingModule } from './chainsRouting.module';
import { ChainsComponent } from './chains.component';
import { ChainsItemComponent } from './item/chainsItem.component';
import { ChainsListingComponent } from './listing/chainsListing.component';
import { ChainsService } from './chains.service';

@NgModule({
  declarations: [ChainsComponent, ChainsItemComponent, ChainsListingComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductSharedModule,
    ChainsRoutingModule
  ],
  providers: [ChainsService]
})
export class ChainsModule {}
