import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentfeerecordPage } from './studentfeerecord.page';

const routes: Routes = [
  {
    path: '',
    component: StudentfeerecordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentfeerecordPageRoutingModule {}
