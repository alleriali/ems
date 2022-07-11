import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Employee} from '../employee'
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees : Employee[];

  constructor(private employeeService : EmployeeService, private router:Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployeeList().subscribe(data => { this.employees = data; })

  }

  updateEmployee(id:number){
    this.router.navigate(['update-employee', id]);
    // this.route.navigate(['update-employee/`${id}`']); this also works, but the above is more elegant!
  }

  deleteEmployee(id:number){
    this.router.navigate(['delete-employee', id]);
  }

  viewEmployeeDetails(id:number){
    this.router.navigate(['view-employee',id]);
  }

}
