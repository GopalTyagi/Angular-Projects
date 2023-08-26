import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  getData()
  {
    return{
      name:'rohit',
      age:70,
      id:10
    }
  }
}
