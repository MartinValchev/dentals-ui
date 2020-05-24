import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar.component';
import {SpecialistListComponent} from './specialist/specialist-list.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { SpecialistService } from './specialist/shared/specialist.service';
import { SpecialistDetailComponent } from './specialist/specialist-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SpecialistListComponent,
    SpecialistDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SpecialistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
