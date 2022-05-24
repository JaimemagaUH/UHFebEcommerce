import { Pipe, PipeTransform } from '@angular/core';
import { PaginationService } from 'src/app/core/services/pagination.service';
import { IProduct } from 'src/app/core/services/products/models/product.models';

@Pipe({
  name: 'paginate',
  pure: false
})
export class PaginationPipe implements PipeTransform {

  constructor(private paginateService: PaginationService) {}

  transform(value: IProduct[], page: number): IProduct[] {
    this.paginateService.setMaxPage(Math.ceil(value.length / 6));
    const start = page*6;
    const end = (page + 1)*6;
    return value.slice(start, end);
  }

}
