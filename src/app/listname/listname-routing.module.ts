import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListnamePage } from './listname.page';

const routes: Routes = [
  {
    path: '',
    component: ListnamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListnamePageRoutingModule {}
