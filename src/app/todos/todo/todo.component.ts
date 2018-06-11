import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todoService: TodoService, private tostr: ToastrService) { }

  ngOnInit() {
    this.todoService.getData();
    this.resetForm();
  }

  onSubmit(todoForm: NgForm) {
    if (todoForm.value.$key == null) {
      this.todoService.insertTodo(todoForm.value);
    } else {
      this.todoService.updateTodo(todoForm.value);
    }
    this.resetForm(todoForm);
    this.tostr.success('Submitted Succcessfully', 'Employee Register');
  }

  resetForm(todoForm?: NgForm) {
    if (todoForm != null) {
    todoForm.reset();
    }

    this.todoService.selectedTodo = {
      $key: null,
      description: '',
      location: '',
      dueDate: null
    };
  }

}
