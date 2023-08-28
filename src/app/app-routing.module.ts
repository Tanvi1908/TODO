import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TableComponent } from './table/table.component';

import { TodoComponent } from './todo/todo.component';

const routes: Routes = [

  { path: '', component: TableComponent },
  { path: 'home', component: HomeComponent }



  /* { path: '', component: TodoComponent } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
