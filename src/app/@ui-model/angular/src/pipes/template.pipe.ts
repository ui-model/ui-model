import { Pipe, PipeTransform } from '@angular/core';
import { template, TemplateOptions } from 'lodash';

@Pipe({
  name: 'template',
})
export class TemplatePipe implements PipeTransform {

  transform(value: string, variables: { [key: string]: any } = {}, options: TemplateOptions = {}): string {
    return template(value, options)(variables);
  }

}
