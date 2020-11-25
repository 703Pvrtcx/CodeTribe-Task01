import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourtCountPageRoutingModule } from './court-count-routing.module';

import { CourtCountPage } from './court-count.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourtCountPageRoutingModule
  ],
  declarations: [CourtCountPage]
})
export class CourtCountPageModule {}
