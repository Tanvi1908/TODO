import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';

import { TodoComponent } from './todo/todo.component';

const routes: Routes = [

  { path: '', component: TableComponent },



  /* { path: '', component: TodoComponent } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
