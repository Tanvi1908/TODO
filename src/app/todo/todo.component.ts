import { Input, ViewChild } from '@angular/core';
import { NgFor } from '@angular/common';
import { Dialog } from '@angular/cdk/dialog';

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective, } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList, CdkDropListGroup, } from '@angular/cdk/drag-drop';
import { ITask } from '../model/task';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { TodoService } from '../todo.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';




@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoform: FormGroup = new FormGroup({
    item: new FormControl(''),
  });

  tasks: ITask[] = [];
  inprogress: ITask[] = [];
  tested: ITask[] = [];
  done: ITask[] = [];
  updateIndex!: any;
  isEditEnabled: boolean = false;
  iseditable!: true;

  /*   todo!: any[]; */

  /*  todo = ['get to work', 'Pick up Groceries', 'fall asleep']; 
 
   done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog']; */
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  /*   dialofRef: any;
   */
  constructor(private fb: FormBuilder, private todo: TodoService, public dialog: MatDialog) { }
  ngOnInit(): void {
    /* this.getList(); */
  }

  tdoform = this.fb.group({
    ietm: ['', Validators.required],
  })
  //add button
  addTask() {

    this.tasks.push({
      description: this.todoform.value.item,
      done: false,
      isedit: true

    });
    console.log(this.tasks)
    localStorage.setItem('token', JSON.stringify(this.tasks));
    this.todoform.reset();

  }
  //:

  //edit button
  onEdit(item: ITask, i: number) {
    this.todoform.controls['item'].setValue(item.description);
    this.updateIndex = i;
    this.isEditEnabled = true;

  }
  //end heree
  /*----------------------------------------------------------------*/

  //update
  updateTask() {
    this.tasks[this.updateIndex].description = this.todoform.value.item;
    this.tasks[this.updateIndex].done = false;
    this.todoform.reset();
    this.todoform.reset(); this.updateIndex = undefined;
    this.isEditEnabled = false;
    localStorage.setItem('token', JSON.stringify(this.tasks));
  } // end here




  //dreag and drop
  drop(event: CdkDragDrop<ITask[], any[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  //drag and drop end here

  // delet button
  delete(i: number) {
    this.tasks.splice(i, 1);

  }
  //end here

  //deletdone
  deletedone(i: number) {
    this.done.splice(i, 1);

  }
  //end heree

  deleteinprogress(i: number) {
    this.inprogress.splice(i, 1);
  }

  deletetested(i: number) {
    this.tested.splice(i, 1)

  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '60',
      height: '200px',
      data: { name: '' },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.tasks.push({
        description: result,
        done: false,
        isedit: true
      });
      this.paginator = this.paginator
    });
    console.log(this.tasks)
  }

  /*  openDialog(): void {
     const dialogRef = this.dialog.open(DialogComponent, {
       data: { name: this.name, animal: this.animal },
     });
 
     dialogRef.afterClosed().subscribe(result => {
       console.log('The dialog was closed');
       this.animal = result;
     });
 
 
 
   } */

  /* getList() {
    this.todo.getList().subscribe({
      next: (res) => {

        console.log(res);
      },

      error: (err) => {
        alert("error while fetchhing the data")
      }
    })
  } */

}
