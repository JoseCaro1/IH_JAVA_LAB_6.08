import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/model/employee';

@Component({
  selector: 'app-card-employee',
  templateUrl: './card-employee.component.html',
  styleUrls: ['./card-employee.component.css']
})
export class CardEmployeeComponent implements OnInit {

  @Input()
  employee:Employee = new Employee(0,"","","","","")

  @Input()
  index:number = 0

  @Output()
  eventDelete : EventEmitter<number> = new EventEmitter()

  mostrar:boolean = false

  constructor() {

   }

  ngOnInit(): void {
  }


  mostrarDetalle() : void {
    this.mostrar = !this.mostrar
  }

  borrar() :void {
    this.eventDelete.emit(this.index)
  }
}
