import {Pipe, PipeTransform} from '@angular/core';
import {TableField, DataType, dataTypeOf, Suppliers} from 'ui-model';
import * as moment from 'moment';
import {isUndefined} from 'util';

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {

  transform(value: any, field: TableField): string {
    if (field && field.formatter !== Suppliers.identity) {
      return field.formatter(value);
    }

    if (isUndefined(value)) {
      return value;
    }

    const type = field ? field.type : dataTypeOf(value);
    switch (type) {
      case DataType.string:
        return `${value}`;
      case DataType.currency:
      case DataType.float:
        const scale = field ? field.scale : 2;
        return `${value.toFixed(scale)}`;
      case DataType.int:
        return `${value.toFixed(0)}`;
      case DataType.boolean:
        return value ? 'Y' : 'N';
      case DataType.date:
        return moment(value).format('YYYY-MM-DD');
      case DataType.time:
        return moment(value).format('hh:mm:ss');
      case DataType.dateTime:
        return moment(value).format('YYYY-MM-DD hh:mm:ss');
      default:
        return `${value}`;
    }
  }

}
