import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentlistattPageRoutingModule } from './studentlistatt-routing.module';

import { StudentlistattPage } from './studentlistatt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentlistattPageRoutingModule
  ],
  declarations: [StudentlistattPage]
})
export class StudentlistattPageModule {}
