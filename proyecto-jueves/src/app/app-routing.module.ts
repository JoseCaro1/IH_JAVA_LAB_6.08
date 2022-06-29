import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardEmployeeComponent } from './components/card-employee/card-employee.component';
import { EmployeeViewComponent } from './components/employee-view/employee-view.component';

const routes: Routes = [
  {path: 'employee/:id', component: EmployeeViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
