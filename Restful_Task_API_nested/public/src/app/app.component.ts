import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// import and Implement OnInit.
export class AppComponent implements OnInit {
  title = 'Rawan!';
  constructor(private _httpService: HttpService) { }

  // ngOnInit will run when the component is initialized, after the constructor method.
  tasks = [];
  Onetask = [];
  newTask: any;
  editTask: any;
  editTog: Boolean;
  ngOnInit() {
    //this.getTasksFromService();
    this.newTask = { title: "", description: "" }
  }
  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got your our tasks", data)
      this.tasks = data['task'];
      this.editTog = false;
      //console.log(this.tasks)
    });
  }

  taskToShow(task) {
    let observable = this._httpService.getOneTask(task);
    observable.subscribe(data => {
      console.log("Got your our task", data)
      this.Onetask = data['task'];
      console.log(this.Onetask)
    });
  }

  onSubmit() {
    // Code to send off the form data (this.newTask) to the Service
    // ...
    // Reset this.newTask to a new, clean object.
    let observable = this._httpService.addTask(this.newTask);
    observable.subscribe(data => {
      console.log("NewTask!", data);
      this.newTask = { title: "", description: "" }
      this.getTasksFromService();
    });
  }
  
  editForm(task) {
    this.editTask = { _id: task._id, title: task.title, description: task.description };
    this.editTog = true;
  }

  onEdit() {
    let observable = this._httpService.editTask(this.editTask);
    observable.subscribe(data => {
      console.log("EditTask!", data);
      this.getTasksFromService();
    })
  }

  onDelete(task) {
    let observable = this._httpService.deleteTask(task);
    observable.subscribe(data => {
      console.log("DeleteTask!", data);
      this.getTasksFromService();
    })
  }
}
