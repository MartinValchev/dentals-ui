import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar.component';
import {SpecialistListComponent} from './specialist/specialist-list.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { SpecialistService } from './specialist/shared/specialist.service';
import { SpecialistActivatorService } from './specialist/shared/specialist.activator.service';
import { SpecialistDetailComponent } from './specialist/specialist-detail.component';
import { Error404Component } from './errors/error404.component';
import { PatientService } from './patient/shared/patient.service';
import { PatientListComponent } from './patient/patient-list.component'; 
import { PatientDetailComponent } from './patient/patient-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SpecialistListComponent,
    SpecialistDetailComponent,
    PatientListComponent,
    PatientDetailComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SpecialistService,
    SpecialistActivatorService,
    PatientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
