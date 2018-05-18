import { Injectable } from '@angular/core';

@Injectable()
export class EmpService {

  constructor() { }
 getEmpData() {

  return   [{'id': 1, 'name': 'abhishek', 'gender': 'male'}
  , {'id': 2, 'name': 'raj', 'gender': 'male'},
  {'id': 3, 'name': 'amit', 'gender': 'male'}];
 }
}
