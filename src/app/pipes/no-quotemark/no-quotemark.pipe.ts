import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noQuotemark'
})
export class NoQuotemarkPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value !== undefined && value !== null) {
      return value.toString().replace(/"/g, "");
    } else {
      return "";
    }
  }

}
