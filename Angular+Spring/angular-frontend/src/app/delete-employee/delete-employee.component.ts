import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  id : number;
  constructor(private route:ActivatedRoute, private employeeService : EmployeeService, private router : Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  returnToList(){
    this.router.navigate(['employees']);
  }


  deleteEmployee(id : number){
    this.employeeService.deleteEmployeeById(id).subscribe(data=>this.returnToList());
  }
  

  
}
