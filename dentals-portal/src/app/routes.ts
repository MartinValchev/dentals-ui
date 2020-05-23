import { Routes } from '@angular/router';
import { SpecialistListComponent } from './specialist/specialist-list.component';

export const appRoutes:Routes = [
    { path: 'specialists', component: SpecialistListComponent },
    { path: '', redirectTo: 'specialists', pathMatch: 'full'}
]