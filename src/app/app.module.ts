import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicFormModule } from './basic-form/basic-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BasicFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
