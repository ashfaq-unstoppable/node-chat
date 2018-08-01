import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/user.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('users', reducer)

  ],
  declarations: []
})
export class UsersModule { }
