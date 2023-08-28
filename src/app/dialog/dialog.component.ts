import { Component } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective, } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgFor } from '@angular/common';

import { Input } from '@angular/core';
import { TodoService } from '../todo.service';
import { Inject } from '@angular/core';




@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA)
  public data: any,
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }



}




