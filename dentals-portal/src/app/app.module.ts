import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar.component';
import {SpecialistListComponent} from './specialist/specialist-list.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { SpecialistService } from './specialist/shared/specialist.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SpecialistListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SpecialistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
