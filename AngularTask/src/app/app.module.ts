import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contact/contacts/contacts.component';
import { ListComponent } from './contact/list/list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '../../node_modules/@angular/common';
import { SearchUserPipe } from './search-user.pipe';
// import { Route } from '../../node_modules/@angular/compiler/src/core';

// const routes: Route = [
//   {path: }
// ]forms

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ListComponent,
    SearchUserPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    CommonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
