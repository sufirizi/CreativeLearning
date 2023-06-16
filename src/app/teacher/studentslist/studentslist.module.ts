import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentslistPageRoutingModule } from './studentslist-routing.module';

import { StudentslistPage } from './studentslist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentslistPageRoutingModule
  ],
  declarations: [StudentslistPage]
})
export class StudentslistPageModule {}
