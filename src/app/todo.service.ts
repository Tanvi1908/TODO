import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  getList() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  postList(ITask: any) {

    return this.http.post<any>("http://localhost:3000/postsList/", ITask);

  }

  /* getList(){
  
    return this.http.get<any>("http://localhost:3000/posts")
  } */

  /*  let url = "https://jsonplaceholder.typicode.com/todos";
   return this.http.get(url)
 } */



}

