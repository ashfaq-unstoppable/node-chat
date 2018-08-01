import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { ChatService } from './chat.service';

//NgRx modules
import { StoreModule } from '@ngrx/store'; 
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({})
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
