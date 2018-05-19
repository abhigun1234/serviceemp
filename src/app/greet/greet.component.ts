import { Component, OnInit } from '@angular/core';
import {GreetService} from '..//greet.service';
@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css'],
  providers: [GreetService]
})
export class GreetComponent implements OnInit {
 public id;
  public content;
  serchResult;
   searchCount;
  constructor(private greetservice: GreetService) { }

  ngOnInit() {
  }

  greet() {

   this.greetservice.greeting().subscribe(response => {
      this.id = response.id;
      this.content = response.content;

    });
  }
  getUser() {
     this.greetservice.search().subscribe(res => {
       console.log(res);
       this.serchResult = res;
       this.searchCount = res.total_count;
      });
}
}
