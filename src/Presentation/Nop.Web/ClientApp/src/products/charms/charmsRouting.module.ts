import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharmsComponent } from './charms.component';
import { CharmsListingComponent } from './Listing/charmsListing.component';
import { CharmsItemComponent } from './Item/charmsItem.component';
import { CategoryWiseListingComponent } from './categoryWise/categoryWiseListing.component';

const routes: Routes = [
  {
    path: 'charms',
    component: CharmsComponent,
    children: [
      { path: '', component: CharmsListingComponent, pathMatch: 'full' },
      { path: ':id/:name', component: CharmsItemComponent },
      { path: 'category/:name/:id', component: CategoryWiseListingComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharmsRoutingModule {}
