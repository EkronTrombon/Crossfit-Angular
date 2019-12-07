import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
  declarations: [
    HomeComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES
  ],
  exports: [
    HomeComponent,
    PagesComponent
  ]
})
export class PagesModule {}