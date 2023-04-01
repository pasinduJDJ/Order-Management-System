import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  users: EventEmitter<User[]> = new EventEmitter();

  constructor(private httpClient: HttpClient) { }

  async addEmail(user: User) {
    this.httpClient.post('http://localhost:8085/emails', {
      "recipient":user.email,
      "msgBody": "Thanks for Choosing",
      "subject":"Succesfully Registered"
    }).subscribe(data => {
      console.log(data);
    });
  }
}
