import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StarstatusPage } from './starstatus.page';

const routes: Routes = [
  {
    path: '',
    component: StarstatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarstatusPageRoutingModule {}
