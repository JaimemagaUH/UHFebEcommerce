import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './components/filter/filter.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SortPipe } from './pipes/sort.pipe';
import { PaginationPipe } from './pipes/paginate.pipe';

@NgModule({
  declarations: [
    FilterComponent,
    FilterPipe,
    FormComponent,
    SortPipe,
    PaginationPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    FilterComponent,
    FilterPipe,
    FormComponent,
    SortPipe,
    PaginationPipe
  ]
})
export class SharedModule { }
