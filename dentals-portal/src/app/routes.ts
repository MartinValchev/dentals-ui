import { Routes } from '@angular/router';
import { SpecialistListComponent } from './specialist/specialist-list.component';
import { SpecialistDetailComponent } from './specialist/specialist-detail.component';
import { Error404Component } from './errors/error404.component';
import { SpecialistActivatorService } from './specialist/shared/specialist.activator.service';

export const appRoutes:Routes = [
    { path: 'specialist/:id', component: SpecialistDetailComponent, canActivate: [SpecialistActivatorService] },
    { path: 'specialists', component: SpecialistListComponent },
    { path: '404', component: Error404Component },    
    { path: '', redirectTo: '/specialists', pathMatch: 'full' }]