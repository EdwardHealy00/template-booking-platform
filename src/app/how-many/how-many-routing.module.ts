import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowManyPage } from './how-many.page';

const routes: Routes = [
  {
    path: '',
    component: HowManyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowManyPageRoutingModule {}
