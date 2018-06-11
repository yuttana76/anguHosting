import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';

import { Todo } from '../shared/todo.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList: Todo[];

  constructor(private todoService: TodoService, private tostr: ToastrService) { }

  ngOnInit() {
    const x = this.todoService.getData();
    console.log(JSON.stringify(x));

    x.snapshotChanges().subscribe(item => {
      this.todoList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.todoList.push(y as Todo);
      });
    });
  }

  onEdit(todo: Todo) {
    console.log(JSON.stringify(todo));
    this.todoService.selectedTodo = Object.assign({}, todo);
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') === true) {
      this.todoService.deleteTodo(key);
      this.tostr.warning('Deleted Successfully', 'Employee register');
    }
  }

}
