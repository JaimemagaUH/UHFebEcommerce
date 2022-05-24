import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { MessageService } from './services/message/message.service';
import { ProductsService } from './services/products/products.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationService } from './services/pagination.service';
import { AuthGuard } from './guards/auth.guard';
import { ExitGuard } from './guards/exit.guard';
import { RequestResolver } from './resolvers/request.resolver';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  providers: [
    MessageService,
    ProductsService,
    PaginationService,
    AuthGuard,
    ExitGuard,
    RequestResolver,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
