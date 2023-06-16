import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GkworldPage } from './gkworld.page';

const routes: Routes = [
  {
    path: '',
    component: GkworldPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GkworldPageRoutingModule {}
