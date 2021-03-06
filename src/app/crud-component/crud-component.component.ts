import { Component, OnInit } from '@angular/core';

import { Employee } from '../models/employee';

import { DataService } from '../data.service';

@Component({
  selector: 'app-crud-component',
  templateUrl: './crud-component.component.html',
  styleUrls: ['./crud-component.component.css']
})
export class CrudComponentComponent {

  employeeArray: Employee[] = [
    {id: 1, name: "User1", country: "USA"},
    {id: 2, name: "User2", country: "Francia"},
    {id: 3, name: "User3", country: "Portugal"},
    {id: 4, name: "User4", country: "Francia"}
  ];

  selectedEmployee: Employee = new Employee();

  /*
  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data => {
      console.log(data);
    });
  }
  */

  openForEdit(employee: Employee) {
    this.selectedEmployee = employee;
  }

  addOrEdit() {
    if(this.selectedEmployee.id === 0) {
      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);
    }
    this.selectedEmployee = new Employee();
  }

  delete() {
    if(confirm("Are you sure want to delete it?")) {
      this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee);
      this.selectedEmployee = new Employee();
    }
  }

  posts = [];

}
