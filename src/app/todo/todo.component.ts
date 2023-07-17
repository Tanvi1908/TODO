import { Input } from '@angular/core';
import { NgFor } from '@angular/common';

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormGroupDirective, } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag, CdkDropList, } from '@angular/cdk/drag-drop';
import { ITask } from './model/task';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todoForm = new FormGroup({
    item: new FormControl(''),
  });

  tasks: any []=[];
  done: ITask []=[];
  updateIndex!: any;
  isEditEnabled: boolean = false; 

  /* todo = ['get to work', 'Pick up Groceries', 'fall asleep']; */
 
  /* done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
 */
  constructor(private fb: FormBuilder) { }

    tdoForm = this.fb.group({
    ietm: ['', Validators.required],
  })
//add button
    addTask(){
      this.tasks.push({
        description: this.todoForm.value.item,
        done:false
      });
     
    }
//end

//edit button
    onEdit(item: ITask, i : number){
       this.todoForm.controls['item'].setValue(item.description);
        this.updateIndex = i;
       this.isEditEnabled = true; 

    }
    //end heree

    //update

    updateTask(){
      this.tasks [this.updateIndex]. description = this.todoForm.value.item;
      this.tasks [this.updateIndex].done = false;
      this.todoForm.reset();
       this.updateIndex = undefined;
      this.isEditEnabled = false; 

    } // end here

  /* addTask(){
 console.log(this.todoForm.value);
 
   }  */


   //dreag and drop
  drop(event: CdkDragDrop<ITask[]>) {

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


}
