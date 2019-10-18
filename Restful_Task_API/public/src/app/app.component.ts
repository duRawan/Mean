import { Component , OnInit} from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// import and Implement OnInit.
export class AppComponent implements OnInit {
  title = 'Rawan!';
  constructor(private _httpService: HttpService){}
 
  // ngOnInit will run when the component is initialized, after the constructor method.
  tasks=[];
  ngOnInit(){
    this.getTasksFromService();
 
  }
  getTasksFromService(){
   let observable= this._httpService.getTasks();
   observable.subscribe(data => {console.log("Got your our tasks", data)
   this.tasks = data['task'];
  //console.log(this.tasks)
});
  }
}
