import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserApi } from '../../../core/apis/user-api.service';

@Injectable()
export class RemoteUsernameValidator implements AsyncValidator {
  constructor(private api: UserApi) {
  }

  validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>;
  validate(c: AbstractControl): ValidationErrors | any;
  validate(c: AbstractControl): any {
    return this.api.checkUnique(c.value).pipe(
      map((unique) => {
        if (!unique) {
          return {
            unique: true,
          };
        }
      }),
    );
  }

}
