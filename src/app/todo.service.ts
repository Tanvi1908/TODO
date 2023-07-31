import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {}

postList(data:any){

return this.http.post<any>("http://localhost:3000/posts",data)

}

 /*  let url = "https://jsonplaceholder.typicode.com/todos";
  return this.http.get(url)
} */



}

