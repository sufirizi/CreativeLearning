import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContinentsPage } from './continents.page';

const routes: Routes = [
  {
    path: '',
    component: ContinentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContinentsPageRoutingModule {}
