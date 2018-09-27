import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {AppService} from './app.service';
import { DetailedComponent } from './main/detailed/detailed.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DetailedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
