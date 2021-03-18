import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowLongPage } from './how-long.page';

const routes: Routes = [
  {
    path: '',
    component: HowLongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowLongPageRoutingModule {}
