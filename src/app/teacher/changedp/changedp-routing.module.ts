import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangedpPage } from './changedp.page';

const routes: Routes = [
  {
    path: '',
    component: ChangedpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangedpPageRoutingModule {}
