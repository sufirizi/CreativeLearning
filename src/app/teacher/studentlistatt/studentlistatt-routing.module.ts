import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentlistattPage } from './studentlistatt.page';

const routes: Routes = [
  {
    path: '',
    component: StudentlistattPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentlistattPageRoutingModule {}
