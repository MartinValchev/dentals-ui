import { Component, OnInit } from '@angular/core';
import { ISpecialist } from './shared/specialist.model';
import { SpecialistService } from './shared/specialist.service';

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
    styles: [`ul {list-style-type: none;}`]
})
export class SpecialistListComponent implements OnInit {

    specialists: ISpecialist[];

    constructor(private specialistService: SpecialistService) {

    }

    getSpecialists(): ISpecialist[] {
        return this.specialists;
    }

    ngOnInit() {
        this.specialistService.getSpecialists()
        .subscribe((data) => {this.specialists = data});
    } 
}
