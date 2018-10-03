import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as $ from 'jquery';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { WlansettingsComponent } from './wlansettings/wlansettings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotfoundComponent,
    HomeComponent,
    WlansettingsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'wlansettings', component: WlansettingsComponent },
      { path: '**', component: NotfoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


