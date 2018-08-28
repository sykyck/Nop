import { NgModule } from '@angular/core';
import { ListItemComponent } from './listing/listItem/listItem.component';
import { FilterComponent } from './listing/filters/filter.component';
import { LineFilterComponent } from './listing/lineFilterAnimation/lineFilterAnimation.component';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from '../../directives/clickOutside.directive';
import { SingleProductComponent } from './singleProduct/singleProduct.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ListItemComponent,
    FilterComponent,
    LineFilterComponent,
    ClickOutsideDirective,
    SingleProductComponent
  ],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [
    ListItemComponent,
    FilterComponent,
    LineFilterComponent,
    SingleProductComponent
  ]
})
export class ProductSharedModule {}
