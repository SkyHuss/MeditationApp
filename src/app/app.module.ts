import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SplachScreenComponent } from './splach-screen/splach-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    SplachScreenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
