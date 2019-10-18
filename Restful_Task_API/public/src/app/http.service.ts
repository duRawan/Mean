import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    // this.getTasks();
    // this.deleteTasks();
  }
  getTasks() {
    // our http response is an Observable, store it in a variable
    //  let tempObservable = this._http.get('/tasks');
    //  let tempObservable_ = this._http.get('/tasks/5da5d29904acf7067e85641f');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    //  tempObservable.subscribe(data => console.log("Got our tasks!", data));
    //  tempObservable_.subscribe(data => console.log("Got our task by id!", data));
    return this._http.get('/tasks');
  }
  // deleteTasks() {
  //   // our http response is an Observable, store it in a variable

  //   // subscribe to the Observable and provide the code we would like to do with our data from the response

  //   let tempObservable = this._http.delete('/tasks/5da5cd6e04acf7067e85641c');
  //   tempObservable.subscribe(data => console.log("delete our task by id!", data));
  // }
  getOneTask(num) {
    return this._http.get('/tasks/'+num);
  }
  postToServer(num) {
    // use the .post() method of HttpClient
    // num must be an object
    // provide the url of your post route - make sure this is set up in your server!
    return this._http.post('/tasks', num);
  }
}
