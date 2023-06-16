import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListformarksPageRoutingModule } from './listformarks-routing.module';

import { ListformarksPage } from './listformarks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListformarksPageRoutingModule
  ],
  declarations: [ListformarksPage]
})
export class ListformarksPageModule {}
