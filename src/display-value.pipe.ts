import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'displayValue' })
export class DisplayValuePipe implements PipeTransform {
  transform(value: any, displayProperty: string, sourceArray: Array<any>): any {
    let displayValue: any;
    if (Array.isArray(value)) {
      displayValue = [];
      for (let i = 0, j = value.length; i < j; i++) {
        for (let k = 0, l = sourceArray.length; k < l; k++) {
          if (sourceArray[k].id === value[i]) {
            displayValue.push(sourceArray[k][displayProperty]);
          }
        }
      }
    } else {
      for (let i = 0, j = sourceArray.length; i < j; i++) {
        if (sourceArray[i].id === value) {
          displayValue = sourceArray[i][displayProperty];
          break;
        }
      }
    }
    return displayValue;
  }
}
