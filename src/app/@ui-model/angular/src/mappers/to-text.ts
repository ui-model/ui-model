import { Response } from '@angular/http';

export function toText(resp: Response): any {
  return resp.text();
}
