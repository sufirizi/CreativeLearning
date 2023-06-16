import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DownloadpostPage } from './downloadpost.page';

const routes: Routes = [
  {
    path: '',
    component: DownloadpostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DownloadpostPageRoutingModule {}
