import { Response } from '@angular/http';

export function toData(resp: Response): any {
  return resp.json().data;
}
