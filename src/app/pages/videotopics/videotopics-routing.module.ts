import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideotopicsPage } from './videotopics.page';

const routes: Routes = [
  {
    path: '',
    component: VideotopicsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideotopicsPageRoutingModule {}
