import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
@Injectable()
export class GreetService {

  constructor(private http: Http) { }

  greeting(): Observable<any>  {

  return this.http.get('http://rest-service.guides.spring.io/greeting')
    .map(res => { const data = res.json();
      return data;
    });
  }
    public search(): Observable <any>  {
    /*alert('hello');*/
    const searchText = 'js';
    const url = 'https://api.github.com/search/users?q=%22ab%22';
    return this.http.get(url).map(
      response => {
        const data = response.json();
        alert(data);
        console.log('data', data);
        return data;
      }
    );

  }
}
