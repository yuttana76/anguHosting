import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList: AngularFireList<any>;
  selectedTodo: Todo = new Todo();
  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.todoList = this.firebase.list('TODO');
    return this.todoList;
  }

  insertTodo(todo: Todo) {
    // console.log(JSON.stringify(todo));
    this.todoList.push({
      description: todo.description,
      location: todo.location,
      dueDate: todo.dueDate
    });
  }
  
  updateTodo(todo: Todo) {
    this.todoList.update(todo.$key,
      {
        description: todo.description,
        location: todo.location,
        dueDate: todo.dueDate
      });
  }

  deleteTodo($key: string) {
    this.todoList.remove($key);
  }

}
