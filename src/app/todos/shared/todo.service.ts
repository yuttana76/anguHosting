import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Todo } from './todo.model';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList: AngularFireList<any>;
  selectedTodo: Todo = new Todo();

  constructor(private firebase: AngularFireDatabase, public datepipe: DatePipe) { }

  getData() {
    this.todoList = this.firebase.list('TODO');
    return this.todoList;
  }

  insertTodo(todo: Todo) {
    // console.log(JSON.stringify(todo));
    const dueDate = this.datepipe.transform(new Date(todo.dueDate), 'yyyy-MM-dd');

    this.todoList.push({
      description: todo.description,
      location: todo.location,
      dueDate: dueDate,
      status: todo.status,
      // createDate: this.firebase.database.app.
      createDate: Date.now()
    }
  );
  }

  updateTodo(todo: Todo) {
    // console.log(JSON.stringify(todo));
    const duDate = this.datepipe.transform(new Date(todo.dueDate), 'yyyy-MM-dd');

    this.todoList.update(todo.$key,
      {
        description: todo.description,
        location: todo.location,
        dueDate: duDate,
        status: todo.status,
        updateDate: Date.now()
      });
  }

  deleteTodo($key: string) {
    this.todoList.remove($key);
  }

}
