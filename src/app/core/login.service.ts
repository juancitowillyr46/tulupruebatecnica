import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { Login } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private db: AngularFireDatabase) { 
    
  }

  public validateLogin(payload: Login): Promise<any> {
    const ref = this.db.list('/users');
    const value = ref.query.orderByChild('email')
                  .equalTo(payload.email);
    return value.get();
  }

}
