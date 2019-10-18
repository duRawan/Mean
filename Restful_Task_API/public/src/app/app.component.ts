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
  Onetask=[];
  ngOnInit() {
    //this.getTasksFromService();

  }
  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got your our tasks", data)
      this.tasks = data['task'];
      //console.log(this.tasks)
    });
  }
  getTaskDetails(id: string) {
    console.log(id);
    let observable_ = this._httpService.getOneTask(id);
    observable_.subscribe(data => {
      console.log("Got your our task", data)
      this.Onetask = data['task'];
      console.log(this.Onetask)
    });
  }
  onButtonClickParam(num: Number): void {
    console.log(`Click event is working with num param: ${num}`);
    // call the service's method to post the data, but make sure the data is bundled up in an object!
    let observable = this._httpService.postToServer({ data: num });
    observable.subscribe(data => console.log("Got our data!", data));
  }

}
