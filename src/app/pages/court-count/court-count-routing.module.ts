import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourtCountPage } from './court-count.page';

const routes: Routes = [
  {
    path: '',
    component: CourtCountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourtCountPageRoutingModule {}
