import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserStore } from './user-store';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    UserStore
  ],
  declarations: []
})
export class StorageModule { }
