import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Register } from './register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private db: AngularFireDatabase) { }

  public registerUser(payload: Register): Promise<any> {
    const ref = this.db.list('users');
    return ref.push(payload).get();
  }
}
