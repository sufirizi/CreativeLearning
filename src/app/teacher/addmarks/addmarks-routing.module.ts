import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddmarksPage } from './addmarks.page';

const routes: Routes = [
  {
    path: '',
    component: AddmarksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddmarksPageRoutingModule {}
