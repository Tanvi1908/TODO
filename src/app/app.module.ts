import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoComponent } from './todo/todo.component';
import { NavbarComponent } from './navbar/navbar.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DialogComponent } from './dialog/dialog.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TableComponent } from './table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';

import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    NavbarComponent,
    DialogComponent,
    TableComponent,
    HomeComponent,


  ],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule, HttpClientModule,
    AppRoutingModule, MatButtonModule, MatIconModule, MatInputModule, DragDropModule, MatToolbarModule,
    BrowserAnimationsModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatButtonToggleModule,
    MatProgressSpinnerModule, MatPaginatorModule, MatTableModule, MatSidenavModule, MatListModule, MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
