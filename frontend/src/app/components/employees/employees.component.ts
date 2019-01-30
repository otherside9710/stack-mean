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
    if (form.value._id) {
      this.emplService.putEmployee(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Employee Updated!'});
          this.getEmployees();
        });
    } else {
      this.emplService.postEmployee(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Employee Saved!'});
          this.getEmployees();
        });
    }
  }

  getEmployees() {
    this.emplService.getEmployees()
      .subscribe(res => {
        this.emplService.employees = res as Employee[];
        console.log(res);
      });
  }

  updateEmployee(employee: Employee) {
    this.emplService.selectedEmployee = employee;
    this.emplService.putEmployee(employee);
  }

  deleteEmployee(_id: string) {
    if (confirm("Are you sure to delete it?")) {
      this.emplService.deleteEmployee(_id)
        .subscribe(res => {
          M.toast({html: 'Employee Deleted!'});
          this.getEmployees();
        });
    }
  }

  //TODO se manda el form cuando le doy en limpiar, corregir esto en algun futuro lejano
  resetForm(form ?: NgForm) {
    if (form) {
      form.reset();
      this.emplService.selectedEmployee = new Employee();
    }
  }

}
