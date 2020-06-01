import { Injectable } from '@angular/core'
import { IPatient } from '../shared/patient.model';
import { Subject,Observable } from 'rxjs';

@Injectable()
export class PatientService {
    constructor() {}

    getPatients(): Observable<IPatient[]> {
        let subject = new Subject<IPatient[]>()
        setTimeout(() =>{
            subject.next(PATIENTS);
            subject.complete;
        },100)
        return subject;
    }
}

const PATIENTS = [
    {
        id: 1,
        firstName: "Plamen",
        lastName: "Hristov",
        address1: "Sofia ul.Ivan Vazov 32",
        address2: "",
        telephone: "0878432112",
        email: "plamen.hristov@sun-fish.com"
    },
    {
        id: 2,
        firstName: "Slavka",
        lastName: "Petrova",
        address1: "Sofia ul.Vasil Levski 12",
        address2: "",
        telephone: "0884321456",
        email: "slavka.petrova@sun-fish.com"
    },
    {
        id: 3,
        firstName: "Filip",
        lastName: "Grigorov",
        address1: "Sofia ul.Ravno Pole 14",
        address2: "",
        telephone: "0882145623",
        email: "filip.grigorov@sun-fish.com"
    }
]