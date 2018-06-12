import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoService } from '../shared/todo.service';

import { Todo } from '../shared/todo.model';
import { ToastrService } from 'ngx-toastr';

import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {

  todoList: Todo[];

  displayedColumns = [ 'description', 'location', 'status', 'dueDate', 'select'];
  dataSource = new MatTableDataSource<Todo>(this.todoList);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private todoService: TodoService, private tostr: ToastrService) { }

  ngOnInit() {
    const x = this.todoService.getData();
    x.snapshotChanges().subscribe(item => {
      this.todoList = [];
      item.forEach(element => {
        const y = element.payload.toJSON();
        y['$key'] = element.key;
        this.todoList.push(y as Todo);

        this.dataSource = new MatTableDataSource<Todo>(this.todoList);
        this.dataSource.paginator = this.paginator;
      });
    });

  }

  onEdit(todo: Todo) {
    // console.log(JSON.stringify(todo));
    this.todoService.selectedTodo = Object.assign({}, todo);
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this record ?') === true) {
      this.todoService.deleteTodo(key);
      this.tostr.warning('Deleted Successfully', 'Employee register');
    }
  }

}
