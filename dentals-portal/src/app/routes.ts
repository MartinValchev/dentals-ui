import { Routes } from '@angular/router';
import { SpecialistListComponent } from './specialist/specialist-list.component';
import { SpecialistDetailComponent } from './specialist/specialist-detail.component';

export const appRoutes:Routes = [
    { path: 'specialists', component: SpecialistListComponent },
    { path: 'specialist/:id', component: SpecialistDetailComponent },
    { path: '', redirectTo: 'specialists', pathMatch: 'full'}
]