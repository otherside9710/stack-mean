import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Employee} from "../models/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee: Employee;
  employees: Employee[];
  URI = 'http://localhost:3000/api/employees/';

  constructor(private http: HttpClient) {
    this.selectedEmployee = new Employee();
  }

  getEmployees() {
    return this.http.get(this.URI);
  }

  postEmployee(employee: Employee) {
    return this.http.post(this.URI, employee);
  }

  putEmployee(employee: Employee) {
    return this.http.put(this.URI + employee._id, employee);
  }

  deleteEmployee(_id: string) {
    return this.http.delete(this.URI + _id);
  }

}
