import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourtStatisticsPageRoutingModule } from './court-statistics-routing.module';

import { CourtStatisticsPage } from './court-statistics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourtStatisticsPageRoutingModule
  ],
  declarations: [CourtStatisticsPage]
})
export class CourtStatisticsPageModule {}
