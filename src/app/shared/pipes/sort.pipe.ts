import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from 'src/app/core/services/products/models/product.models';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: IProduct[], ascendent: boolean): IProduct[] {
    return value.sort((a, b) => {
      const priceA = ascendent ? parseInt(a.price) : parseInt(b.price);
      const priceB = ascendent ? parseInt(b.price) : parseInt(a.price);
      return priceA - priceB;
    });
  }

}
