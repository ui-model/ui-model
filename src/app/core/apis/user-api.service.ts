import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { isEmpty } from 'rxjs/operators';
import { users } from '../mock/users';
import { UserModel } from '../models/user.model';

@Injectable()
export class UserApi {

  constructor() {
  }

  query(usernameFilter?: string): Observable<UserModel[]> {
    return of(users.filter(user => new RegExp(`^${usernameFilter}$`).test(user.username)));
  }

  checkUnique(username: string): Observable<boolean> {
    return this.query(`^${username}$`).pipe(
      isEmpty(),
    );
  }
}
