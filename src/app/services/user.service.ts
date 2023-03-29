import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  userList:User[] =[];
  users:EventEmitter<User[]>=new EventEmitter();


  async getUsers():Promise<Observable<User[]>>{
    this.httpClient.get<User[]>('http://localhost:8082/products').subscribe(data=>{
     this.users.emit(data);
   })
   
   return this.users;
 }

 async addUser(user:User){
  this.httpClient.post('http://localhost:8082/products',{
    "fullName":user.fullName,
    "nic":user.nic,
    "contactNo":user.contactNo,
    "userName":user.userName,
    "password":user.password,
  }).subscribe(data=>{
    console.log(data);
      debugger;
   });
}
}
