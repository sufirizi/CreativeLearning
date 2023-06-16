import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListstatusPage } from './liststatus.page';

const routes: Routes = [
  {
    path: '',
    component: ListstatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListstatusPageRoutingModule {}
