import { Response } from '@angular/http';
import { toJson } from './to-json';

export function toData(resp: Response): any {
  return toJson(resp).data;
}
