import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from 'src/app/core/services/products/models/product.models';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: IProduct[], criteria: string): IProduct[] {
    return value.filter(product => {
      return product.name.toLowerCase().includes(criteria.toLowerCase());
    });
  }

}
