import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info.component';
import { ContentComponent } from './content/content.component';
import { CareComponent } from './care/care.component';

const routes: Routes = [
  {
    path: 'info',
    component: InfoComponent,
    children: [
      { path: 'productInformation', component: ContentComponent },
      { path: 'deliveryReturns', component: ContentComponent },
      { path: 'warningAboutForgery', component: ContentComponent },
      { path: 'productionCondition', component: ContentComponent },
      { path: 'faq', component: ContentComponent },
      { path: 'care', component: CareComponent },
      { path: '', redirectTo: 'productInformation', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule {}
