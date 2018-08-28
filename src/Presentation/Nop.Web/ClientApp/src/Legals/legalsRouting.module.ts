import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LegalsComponent } from './legals.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {
    path: 'legals',
    component: LegalsComponent,
    children: [
      { path: 'terms', component: ContentComponent },
      { path: 'service', component: ContentComponent },
      { path: 'privacy', component: ContentComponent },
      { path: 'shippingAndDelivery', component: ContentComponent },
      { path: 'pricesAndPayment', component: ContentComponent },
      { path: '', redirectTo: 'terms', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegalsRoutingModule {}
