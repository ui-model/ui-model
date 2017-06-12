import { Response } from '@angular/http';

export function toJson(resp: Response): any {
  return resp.json();
}
