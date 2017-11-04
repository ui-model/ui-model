import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { isEmpty } from 'rxjs/operators';
import { UserModel } from '../models/user.model';

@Injectable()
export class UserApi {

  constructor(private http: HttpClient) {
  }

  query(usernameFilter?: string): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(`api/users?username=${usernameFilter}`);
  }

  checkUnique(username: string): Observable<boolean> {
    return this.query(`^${username}$`).pipe(
      isEmpty(),
    );
  }
}
