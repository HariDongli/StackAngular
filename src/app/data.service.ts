import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
@Injectable()
export class DataService {

  constructor(private http : HttpClient ) { }
getData(){
return this.http.get('../assets/data.json');
}
}
