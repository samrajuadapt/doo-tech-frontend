import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabOneComponent } from './components/tab-one/tab-one.component';
import { TabTwoComponent } from './components/tab-two/tab-two.component';
import { TabThreeComponent } from './components/tab-three/tab-three.component';
import { TabMainComponent } from './components/tab-main/tab-main.component';

import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrodcastService } from './services/brodcast.service';

@NgModule({
  declarations: [
    AppComponent,
    TabOneComponent,
    TabTwoComponent,
    TabThreeComponent,
    TabMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule
  ],
  providers: [BrodcastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
