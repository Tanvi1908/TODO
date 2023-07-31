import { Component } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective, } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {NgFor} from '@angular/common';
import {CdkDragDrop,CdkDrag,CdkDropList,CdkDropListGroup,moveItemInArray,transferArrayItem,} from '@angular/cdk/drag-drop';
import { ITask } from '../model/task';
import { Input } from '@angular/core';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  
  todoform:FormGroup = new FormGroup({
    item: new FormControl(''),
  });
 
  tasks : ITask []=[];
  inprogress: ITask[]=[];
  tested:ITask []=[];
  done: ITask []=[];
  updateIndex!: any;
  isEditEnabled: boolean = false; 

  constructor(private todo: TodoService, private fb: FormBuilder,  public dialog: MatDialog,
     private dialogRef: MatDialogRef<DialogComponent> ) { }

 
  tdoform  = this.fb.group({
    ietm: ['', Validators.required],
  })
//add button
    addTask(){
      this.tasks.push({
        description : this.todoform.value.item,
        done:false,   
      });
    /*   if( this.todoform.valid){

        this.todo.postList(this.tdoform.value).subscribe({next:(res)=>{
          alert("list added succesfullu")
        }})
      } */
      
   

    console.log(this.tasks)
      localStorage.setItem('token', JSON.stringify(this.tasks));
     this.todoform.reset();
     
    }
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

/* openDialog(){
  this.dialog.open(DialogComponent,{
    width:'60',
    height:'200px'
    
  }) */
    
  
}
