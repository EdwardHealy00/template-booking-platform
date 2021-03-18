import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HowManyPageRoutingModule } from './how-many-routing.module';

import { HowManyPage } from './how-many.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HowManyPageRoutingModule
  ],
  declarations: [HowManyPage]
})
export class HowManyPageModule {}
