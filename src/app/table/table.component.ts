import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { NgFor } from '@angular/common';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList, CdkDropListGroup, }
  from '@angular/cdk/drag-drop';
import { ITask } from '../model/task';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  /*  todoform: FormGroup = new FormGroup({
     item: new FormControl(''),
   }); */


  /*  done: ITask[] = []; */
  tasks: ITask[] = [];
  updateIndex!: any;
  isEditEnabled: boolean = false;
  /*  animal!: string; */
  paginator: any;
  name: any;
  /* isEdit: boolean = true; */
  /* isedit!: boolean; */
  /* isEdit: boolean = true; */
  /* isedit!: boolean; */


  constructor(public dialog: MatDialog, private fb: FormBuilder,) { }

  tdoform = this.fb.group({
    ietm: ['', Validators.required],
  })

  /*  openDialog(): void {
     const dialogRef = this.dialog.open(DialogComponent, {
       data: { name: this.name, animal: this.animal },
     });
 
     dialogRef.afterClosed().subscribe(result => {
       console.log('The dialog was closed');
       this.animal = result;
     });
   } */



  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '60',
      height: '200px',
      data: { name: '' },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.done.push({
        content: result,
        isedit: false,

      });
      this.paginator = this.paginator
    });
    console.log(this.done)
  }


  /*todo = [
    { text: 'Get to work', editable: false },
    { text: 'Pick up groceries', editable: false },
    // ... other items
  ];*/

  /*done = [
    { text: 'Get up', editable: false },
    { text: 'Brush teeth', editable: false, edit: true },
    // ... other items
  ];*/

  todo1: { text: string; isedit: boolean; }[] =
    [{ text: 'Get to work', isedit: false },
    { text: 'back to work', isedit: false }
    ];
  update(item: { text: string, isedit: boolean }, newText: string) {
    item.text = newText;
    item.isedit = false
  }

  done1 = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog',];

  done: { content: string; isedit: boolean; }[] = [
    { content: 'abc 1', isedit: false, },
    { content: 'abc 2', isedit: false, },

    // Add more items
  ];
  inprogress: { content: string; isedit: boolean }[] = [
    { content: 'test', isedit: false, },
    { content: 'test1', isedit: false, }
  ];
  /* done: { content: string; isedit: boolean }[] = []; */

  /* addItem() {
     this.done.push({
       content: '', isedit: false
     });
 
     console.log(this.done);
     localStorage.setItem('token', JSON.stringify(this.tasks));
   }*/

  updateItem(item: { content: string; isedit: boolean }, newContent: string) {
    item.content = newContent;
    item.isedit = false;
    console.log(this.done)
  }

  //edit button
  /*  onEdit(item: any) {
     this.isEdit = false;
     this.isEditEnabled = true;
   } */
  //end heree

  deleteItem(index: number) {
    this.done.splice(index, 1);
  }
  /*  edit(item: any) {
     item.editable = true;
     this.isEditEnabled = true;
   } */


  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }


}


