import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestreportPage } from './testreport.page';

const routes: Routes = [
  {
    path: '',
    component: TestreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestreportPageRoutingModule {}
