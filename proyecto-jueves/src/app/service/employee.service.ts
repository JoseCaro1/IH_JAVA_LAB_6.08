import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  getEmployees() : Observable<Employees[]> {
    return this.http.get<Employees[]>('http://localhost:8080/employee/find-all')
  }

  deleteEmployee(id:number) : Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/employee/delete/${id}`)
  }

  getEmployee(id:number) : Observable<Employee> {
    return this.http.get<Employee>(`http://localhost:8080/employee/${id}`)
  }


}


export interface Employees {
  id:number,
  name:string,
  phoneNumber:string,
  officeNumber:string,
  position:string,
  manager:string,


}

/**
 * {results: [
 *  {},
 *  {}
 * ],
 * status:200}
 *
 * result: [
 *  {},
 *  {}
 * ]
 *
 */
