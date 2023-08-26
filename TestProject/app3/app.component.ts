import { Component } from '@angular/core';
import {UserDataService} from './user-data.service'
import {UserServiceService} from './user-service.service'

interface dataType{
  name:string,
  id:number,
  indian:boolean,
  address:any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing';
  name=""
  data2:any=[];

  // // model
  // getData()
  // {
  //   const data:dataType ={
     
  //     name:'Rohit Verma',
  //     id:100,
  //     indian:true,
  //     address:'43 ,sehore MP'
  //   }
  //   return data;
  // }

constructor(private user:UserDataService,private user2:UserServiceService)
{
//   // service
// console.warn(this.user.getData())
// let data=this.user.getData();
// this.name=data.name;

// //  service call api
// this.user2.getData().subscribe(data2=>{
//   console.warn(data2)
//    this.data2=data2
// })
}
}