import { Component, OnInit } from '@angular/core';
import {EmpService} from '..//emp.service';
@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css'],
  providers: [EmpService]
})
export class EmpdetailsComponent implements OnInit {
   empdetails;
  constructor(public emp: EmpService) { }

  ngOnInit() {
  }
   getEmpDetails() {

    this.empdetails = this.emp.getEmpData();
    return this.empdetails;
   }
}
