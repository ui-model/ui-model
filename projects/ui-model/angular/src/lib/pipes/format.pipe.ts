import { Pipe, PipeTransform } from '@angular/core';
import { TableField } from '@ui-model/common';
import { DataType, dataTypeOf, identity, isUndefined } from '@ui-model/core';
import { format } from 'date-fns';

@Pipe({
  name: 'format',
})
export class FormatPipe implements PipeTransform {

  transform(value: any, field: TableField): string {
    if (field && field.formatter !== identity) {
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
        return format(value, 'YYYY-MM-DD');
      case DataType.time:
        return format(value, 'hh:mm:ss');
      case DataType.dateTime:
        return format(value, 'YYYY-MM-DD hh:mm:ss');
      default:
        return `${value}`;
    }
  }

}
