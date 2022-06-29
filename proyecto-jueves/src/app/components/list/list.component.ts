import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  employeeList:Employee[]

  constructor(private employeeService:EmployeeService) {
    this.employeeList=[]
   }

  ngOnInit(): void {
   this.getAll()
  }



  getAll(): void {
    this.employeeService.getEmployees().subscribe((responseEmployee) => {
        responseEmployee.forEach((element) => {
          this.employeeList.push(new Employee(element.id,element.name,element.phoneNumber,element.officeNumber,element.position,element.manager))
        })
    })
  }

  borrar(index:number) {
    this.employeeService.deleteEmployee( this.employeeList.splice(index,1)[0].id).subscribe((response) => {

    })
  }

}
