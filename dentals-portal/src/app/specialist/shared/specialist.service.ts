import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs'
import { ISpecialist } from './specialist.model';


@Injectable()
export class SpecialistService {

    specialists: ISpecialist[];

    getSpecialists(): Observable<ISpecialist[]> {
        let subject = new Subject<ISpecialist[]>();
        setTimeout(() => {
            subject.next(SPECIALISTS); subject.complete();
        }, 100)
        return subject;
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