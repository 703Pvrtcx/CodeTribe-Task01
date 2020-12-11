import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TempViewPageRoutingModule } from './temp-view-routing.module';

import { TempViewPage } from './temp-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TempViewPageRoutingModule
  ],
  declarations: [TempViewPage]
})
export class TempViewPageModule {}
