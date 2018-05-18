import { Component, OnInit } from '@angular/core';
import {EmpService} from '..//emp.service';
@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css'],
  providers: [EmpService]
})
export class EmpComponent  {
  emplist  ;
  constructor(public emp: EmpService) {
   this.emplist = this.emp.getEmpData();
    alert(this.emplist[0].name);

   }

}
