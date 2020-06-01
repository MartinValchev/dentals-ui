import { Component } from '@angular/core';
import { OnInit} from '@angular/core'
import { PatientService  } from './shared/patient.service';
import { ActivatedRoute } from '@angular/router';
import { IPatient } from './shared/patient.model';

@Component({
    templateUrl: './patient-detail.component.html',
    styles: []
})
export class PatientDetailComponent implements OnInit {

    patient: IPatient;

    constructor(private patientService: PatientService, private route: ActivatedRoute, ) {

    }

    ngOnInit() {
        let id = this.route.snapshot.params['id'];
        this.patientService.getPatient(id).subscribe((data) => {
            this.patient = data;
        })
    }
}