import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService } from './shared/sidebar.service';
import { SharedService } from './shared/shared.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SidebarService,
    SharedService
  ]
})
export class ServiceModule { }
