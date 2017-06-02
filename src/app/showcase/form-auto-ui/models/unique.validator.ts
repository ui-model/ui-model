import { UserApi } from '../../../core/apis/user-api.service';
import { Injector } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
export function checkUnique(c: AbstractControl): Observable<ValidationErrors> {
  const injector: Injector = this;
  const api = injector.get(UserApi);
  return api.checkUnique(c.value)
    .map((unique) => {
      if (!unique) {
        return {
          unique: true,
        };
      }
    });
}

