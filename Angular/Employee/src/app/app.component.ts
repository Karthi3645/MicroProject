import { Component } from '@angular/core';
import { Employee } from './model/Employee';
import { EmpoyeeService } from './empoyee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  employee : Employee;
  result : string;
  v:string;
  employeeArr : Employee[];
  flag:boolean;
  constructor(private service:EmpoyeeService)
  {
    this.employee = new Employee();
    this.result="";
    this.v="";
    this.employeeArr =[];
  this.flag=false;
  }
  insertEmployee(data : any)
  {
    this.employee.id=data.empId;
    this.employee.empName=data.empName;
    this.employee.empSalary=data.empSalary;
    alert(data.empId+" "+data.empName+" "+data.empSalary);
    //this.v=data.empId+" "+data.empName+" "+data.empSalary;
    // console.log(data.empId);
    this.result=this.service.insertEmployee(this.employee);
  }
  updateEmployee(data : any)
  {
    this.employee.id=data.empId;
    this.employee.empName=data.empName;
    this.employee.empSalary=data.empSalary;
    alert(data.empId+" "+data.empName+" "+data.empSalary);
    //this.v=data.empId+" "+data.empName+" "+data.empSalary;
    // console.log(data.empId);
    this.result=this.service.updateEmployee(this.employee);
  }
  deleteEmployee(data : any)
  {
    this.result = this.service.deleteEmployee(data.empId);
  }
  findEmployee(data : any)
  {
    this.employee = this.service.findEmployee(data.empId);
    this.result= this.employee.id+" "+this.employee.empName+" "+this.employee.empSalary;
  }
  findAllEmployee()
  {
    this.employeeArr=this.service.findAllEmployee();
    this.flag=true;
  }
}
