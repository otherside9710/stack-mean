import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {NgForm} from "@angular/forms";
import {Employee} from "../../models/employee";

declare var M: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor(private emplService: EmployeeService) {
  }

  ngOnInit() {
    this.getEmployees();
  }

  addEmployee(form: NgForm) {
    this.emplService.postEmployee(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Employee Saved!'});
        this.getEmployees();
      });
  }

  getEmployees() {
    this.emplService.getEmployees()
      .subscribe(res => {
        this.emplService.employees = res as Employee[];
        console.log(res);
      });
  }

  updateEmployee(employee : Employee){
      this.emplService.selectedEmployee = employee;
      this.emplService.putEmployee(employee);
  }
  deleteEmployee(employee : Employee){

  }

  resetForm(form ?: NgForm) {
    if (form) {
      form.reset();
      this.emplService.selectedEmployee = new Employee();
    }
  }

}
