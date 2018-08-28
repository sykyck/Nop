import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChainsComponent } from './chains.component';
import { ChainsListingComponent } from './listing/chainsListing.component';
import { ChainsItemComponent } from './item/chainsItem.component';

const routes: Routes = [
  {
    path: 'chains',
    component: ChainsComponent,
    children: [
      { path: '', component: ChainsListingComponent, pathMatch: 'full' },
      { path: ':id/:name', component: ChainsItemComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChainsRoutingModule {}
