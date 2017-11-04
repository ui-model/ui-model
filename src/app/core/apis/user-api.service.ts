import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { isEmpty, toData } from '@ui-model/angular';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { UserModel } from '../models/user.model';

@Injectable()
export class UserApi {

  constructor(private http: Http) {
  }

  query(usernameFilter?: string): Observable<UserModel[]> {
    return this.http.get(`api/users?username=${usernameFilter}`).pipe(
      map(toData),
      map(UserModel.from),
    );
  }

  checkUnique(username: string): Observable<boolean> {
    return this.query(`^${username}$`).pipe(
      map(isEmpty),
    );
  }
}
