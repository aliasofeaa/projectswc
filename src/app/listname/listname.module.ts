import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListnamePageRoutingModule } from './listname-routing.module';

import { ListnamePage } from './listname.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListnamePageRoutingModule
  ],
  declarations: [ListnamePage]
})
export class ListnamePageModule {}
