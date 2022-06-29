import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {
  id!: number
  employee : Employee = new Employee(0,"","","","","")
  constructor(private employeeService : EmployeeService, private route : ActivatedRoute) {
    this.id = this.route.snapshot.params["id"]
    console.log("hola")
   }

  ngOnInit(): void {

    console.log(this.id)
    this.employeeService.getEmployee(this.id).subscribe((data)=>{
      this.employee = data;
    })
  }

  borrar() {
    this.employeeService.deleteEmployee(this.id).subscribe()
  }

}
