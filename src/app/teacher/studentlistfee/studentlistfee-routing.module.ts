import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentlistfeePage } from './studentlistfee.page';

const routes: Routes = [
  {
    path: '',
    component: StudentlistfeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentlistfeePageRoutingModule {}
