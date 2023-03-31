import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, subscribeOn } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;

  constructor(private httpClient: HttpClient) { }

  userList: User[] = [];
  users: EventEmitter<User[]> = new EventEmitter();
  isAdmin: EventEmitter<boolean> = new EventEmitter();
  isLoggedIn: EventEmitter<boolean> = new EventEmitter();


  async getUsers(): Promise<Observable<User[]>> {
    this.httpClient.get<User[]>('http://localhost:8082/users').subscribe(data => {
      this.users.emit(data);
    })

    return this.users;
  }

  async addUser(user: User) {
    this.httpClient.post('http://localhost:8082/users', {
      "fullName": user.fullName,
      "nic": user.nic,
      "contactNo": user.contactNo,
      "email": user.email,
      "userName": user.userName,
      "password": user.password,
    }).subscribe(data => {
      console.log(data);
    });
  }

  logOut(){
    localStorage.clear();
    this.isAdmin.emit(false);
    this.isLoggedIn.emit(false);
 }
}
