import { Component, OnInit } from '@angular/core'
import { IPatient } from './shared/patient.model'
import { PatientService } from './shared/patient.service';

@Component({
    template: `
    <div>
        <h1>Patients</h1>
        <hr/>
        <div class="row">
        <div *ngFor="let patient of patients" class="col-md-5">
            <a href="#">
                <ul>
                    <li> First name: {{patient.firstName}}</li>
                    <li> Last name: {{patient.lastName}} </li>
                    <li> Address1: {{patient.address1}} </li>
                    <li *ngIf="patient.address2"> Address: {{patient.address2}} </li>
                    <li> Email: {{patient.email}}</li>
                    <li> Telephone: {{patient.telephone}} </li>
                </ul>
            </a>
        </div>
    </div>
`,
    styles: [
        `ul {list-style-type: none;}`
    ],
})
export class PatientListComponent implements OnInit {
    patients: IPatient[];

    constructor(private patientService: PatientService) {

    }

    ngOnInit() {
        this.patientService.getPatients().subscribe((data) => {
            this.patients = data;
        }); 
    }
}