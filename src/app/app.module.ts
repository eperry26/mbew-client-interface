import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatSelectModule} from '@angular/material/select';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TremorGraphComponent } from './tremor-graph/tremor-graph.component';
import { MenuComponent } from './menu/menu.component';
import { PhysicianProfileComponent } from './physician-profile/physician-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TremorGraphComponent,
    MenuComponent,
    PhysicianProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
