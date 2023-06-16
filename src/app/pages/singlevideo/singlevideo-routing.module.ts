import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinglevideoPage } from './singlevideo.page';

const routes: Routes = [
  {
    path: '',
    component: SinglevideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinglevideoPageRoutingModule {}
