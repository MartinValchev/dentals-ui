import { Component } from '@angular/core';
import { ISpecialist } from './shared/specialist.model';

@Component({
    selector: 'spec',
    template: `
        <div>
            <h1>Specialists</h1>
            <hr/>
            <div class="row">
            <div *ngFor="let specialist of getSpecialists()" class="col-md-5">
                <ul>
                    <li> ID: {{specialist.id}}</li>
                    <li> First name: {{specialist.firstName}}</li>
                    <li> Last name: {{specialist.lastName}} </li>
                    <li> Address: {{specialist.address}} </li>
                    <li> Email: {{specialist.email}}</li>
                    <li> Telephone: {{specialist.telephone}} </li>
                    <li> Speciality: {{specialist.speciality}} </li>
                </ul>
            </div>
        </div>
    `,
    styles: []
})
export class SpecialistListComponent {
    getSpecialists(): ISpecialist[] {
        return SPECIALISTS;
    }
}
const SPECIALISTS: ISpecialist []= [
    {
        id : 1,
        firstName: 'Pesho',
        lastName: 'Metodiev',
        address: 'Sofia ul. Nezabravka 22',
        email: 'pesho.metodiev@mail.com',
        telephone: '0878341254',
        speciality: 'dentist'
    },
    {
        id : 2,
        firstName: 'Zdravka',
        lastName: 'Ivanova',
        address: 'Sofia ul. Pernik 9',
        email: 'zdravka.ivanova@mail.com',
        telephone: '0878341267',
        speciality: 'receptionist'
    },
    {
        id : 3,
        firstName: 'Ivo',
        lastName: 'Zaraliev',
        address: 'Sofia ul. Kiustendil 15',
        email: 'ivo.zaraliv@mail.com',
        telephone: '0878341290',
        speciality: 'dentist'
    }
]