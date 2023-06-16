import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinglenoticePage } from './singlenotice.page';

const routes: Routes = [
  {
    path: '',
    component: SinglenoticePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinglenoticePageRoutingModule {}
