import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getWeather(city: string){
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=f919c3649e604c9b59f2cfdb907e0599`)
    .pipe(map( (data:any) =>{ data.json() 
      console.log(data);})) 
      .toPromise();
  }
}
