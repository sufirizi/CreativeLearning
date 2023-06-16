import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarksformPage } from './marksform.page';

const routes: Routes = [
  {
    path: '',
    component: MarksformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarksformPageRoutingModule {}
