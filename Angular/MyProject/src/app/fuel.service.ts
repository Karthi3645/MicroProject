import { Injectable } from '@angular/core';
import { Vehicle } from './model/Vehicle';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FuelService {
  url:string;
  vehicle: Vehicle;
  vehicleArr:Vehicle[];
  constructor(private http:HttpClient) {
    this.url="http://localhost:3005/vehicle";
    this.vehicle=new Vehicle();
    this.vehicleArr=[];
   }
   savedetails(vehicle:Vehicle)
  {

   this.http.post<Vehicle>(this.url,vehicle).subscribe();
   return "Vehicle Details Added";
  }
  updatedetails(vehicle:Vehicle)
  {

   this.http.put<Vehicle>(this.url+"/"+vehicle.id,vehicle).subscribe();
   return "Vehicle Details Updated";
  }
  deletedetails(vi:number)
  {

   this.http.delete<Vehicle>(this.url+"/"+vi).subscribe();
   return "Vehicle Details Deleted";
  }
  find(vi:number)
  {
    this.http.get<Vehicle>(this.url+"/"+vi).subscribe(data=>this.vehicle=data);
    return this.vehicle;
  }
  findAll()
  {
    this.http.get<Vehicle[]>(this.url).subscribe(data=>this.vehicleArr=data);
    return this.vehicleArr;
  }


}
