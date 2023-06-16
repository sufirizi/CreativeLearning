import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddmarksPageRoutingModule } from './addmarks-routing.module';

import { AddmarksPage } from './addmarks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddmarksPageRoutingModule
  ],
  declarations: [AddmarksPage]
})
export class AddmarksPageModule {}
