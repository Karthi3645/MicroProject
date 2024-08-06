import { Component } from '@angular/core';
import { Vehicle } from './model/Vehicle';
import { FuelService } from './fuel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyProject';
  vehicle:Vehicle;
  vehicleArr:Vehicle[];
  result:string;
  v:string;
  flag:boolean=false;

  constructor(private service:FuelService)
  {
    this.vehicle=new Vehicle();
    this.result="";
    this.v="";
    this.vehicleArr=[];

  }
  savedetails(data : any)
  {
    this.vehicle.id=data.vi;
    this.vehicle.km=data.km;
    this.vehicle.li=data.li;
    alert(data.vi+" "+data.km+" "+data.li);
    
    this.result=this.service.savedetails(this.vehicle);
  }
  updatedetails(data : any)
  {
    this.vehicle.id=data.vi;
    this.vehicle.km=data.km;
    this.vehicle.li=data.li;
    this.result=this.service.updatedetails(this.vehicle);
  }
  deletedetails(data : any)
  {

    this.result=this.service.deletedetails(data.vi);
  }
  find(data : any)
  {

    this.vehicle=this.service.find(data.vi);
    this.result=this.vehicle.id+" "+this.vehicle.km+" "+this.vehicle.li;
  }
  findAll()
  {

    this.vehicleArr=this.service.findAll();
    this.flag=true;
  }
}
