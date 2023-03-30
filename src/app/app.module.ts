import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {AngularFireModule} from '@angular/fire/compat'
import {HttpClientModule} from '@angular/common/http';
import 'hammerjs';
import 'chartjs-plugin-zoom';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TremorGraphComponent } from './tremor-graph/tremor-graph.component';
import { MenuComponent } from './menu/menu.component';
import { PhysicianProfileComponent } from './physician-profile/physician-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { TremordataService } from './tremordata.service';
import { BarGraphComponent } from './bar-graph/bar-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    TremorGraphComponent,
    MenuComponent,
    PhysicianProfileComponent,
    BarGraphComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgChartsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [TremordataService],
  bootstrap: [AppComponent]
})


export class AppModule { }
