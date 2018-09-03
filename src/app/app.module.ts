import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule,routepaths} from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { DataService} from './data.service';
import { HomeComponent } from './home/home.component';
import { CharacterAboutComponent } from './character-about/character-about.component';
import { DetailComponentComponent } from './detail-component/detail-component.component';

@NgModule({
  declarations: [
    AppComponent,
    routepaths,
    HomeComponent,
    CharacterAboutComponent,
    DetailComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
