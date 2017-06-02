import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UserModel } from '../models/user.model';
import { isEmpty, toData } from '@ui-model/angular';

@Injectable()
export class UserApi {

  constructor(private http: Http) {
  }

  query(usernameFilter?: string): Observable<UserModel[]> {
    return this.http.get(`api/users?username=${usernameFilter}`)
      .map(toData)
      .map(UserModel.from);
  }

  checkUnique(username: string): Observable<boolean> {
    return this.query(`^${username}$`)
      .map(isEmpty);
  }
}
