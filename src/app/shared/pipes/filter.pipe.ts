import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from 'src/app/core/services/products/models/product.models';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  constructor() {}

  transform(value: IProduct[], criteria: string): IProduct[] {
    return value.filter(product => {
      return product.name.toLowerCase().includes(criteria.toLowerCase());
    });
  }

}
