import { Input } from '@angular/core';
import { NgFor } from '@angular/common';
import {Dialog} from '@angular/cdk/dialog';

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective, } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList, CdkDropListGroup, } from '@angular/cdk/drag-drop';
import { ITask } from '../model/task';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { TodoService } from '../todo.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog,  MAT_DIALOG_DATA} from '@angular/material/dialog';
import { OnInit } from '@angular/core';




@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{

  
 
  todoform:FormGroup = new FormGroup({
    item: new FormControl(''),
  });
 
  tasks : ITask []=[];
  inprogress: ITask[]=[];
  tested:ITask []=[];
  done: ITask []=[];
  updateIndex!: any;
  isEditEnabled: boolean = false; 
  
/*   todo!: any[]; */

  /*  todo = ['get to work', 'Pick up Groceries', 'fall asleep']; 
 
   done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog']; */
 
  constructor(private fb: FormBuilder, private todo:TodoService, public dialog: MatDialog ) { }
  ngOnInit(): void {
    this.getList();
  }

    tdoform  = this.fb.group({
    ietm: ['', Validators.required],
  })
//add button
    addTask(){
      this.tasks.push({
        description : this.todoform.value.item,
        done:false,
    
      });
    console.log(this.tasks)
      localStorage.setItem('token', JSON.stringify(this.tasks));
     this.todoform.reset();
     
    }
//:

//edit button
    onEdit(item: ITask, i : number){
       this.todoform.controls['item'].setValue(item.description);
        this.updateIndex = i;
       this.isEditEnabled = true; 

    }
    //end heree

    //update

    updateTask(){
      this.tasks [this.updateIndex]. description = this.todoform.value.item;
      this.tasks [this.updateIndex].done = false;
      this.todoform.reset();
      this.todoform.reset(); this.updateIndex = undefined;
      this.isEditEnabled = false; 
      

      localStorage.setItem('token', JSON.stringify(this.tasks));


    } // end here

  /* addTask(){
 console.log(this.todoForm.value);
 
   }  */


   //dreag and drop
  drop(event: CdkDragDrop<ITask[],any[]>) {

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

  deleteinprogress(i: number){
this.inprogress.splice(i, 1);
  }

  deletetested(i: number){
    this.tested.splice(i,1)

  }

  openDialog(){
    this.dialog.open(DialogComponent,{
      width:'60',
      height:'200px'
      
    });
  }

  getList(){
    this.todo.getList().subscribe({
      next:(res)=>{
        console.log(res);
      },

      error:(err)=>{
        alert("error while fetchhing the data")
      }
    })
  }
  
}
