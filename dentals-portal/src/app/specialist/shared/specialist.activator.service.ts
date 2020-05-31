import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { SpecialistService } from './specialist.service';
import { ISpecialist } from './specialist.model'
import { Observable } from 'rxjs';

@Injectable()
export class SpecialistActivatorService implements CanActivate {

    specialists: ISpecialist[];
   
    constructor(private specialistService: SpecialistService,
        private route: ActivatedRoute, private router: Router) {
            console.log('in constructor activator')
         
    }

    canActivate(route: ActivatedRouteSnapshot):Observable<boolean> | Promise<boolean> | boolean {       
        let id =  route.params['id'];
        console.log('id: ' + id)
        return new Promise<boolean>((resolve, reject) => {
            setTimeout(() => {
              this.specialistService.getSpecialist(id)
              .subscribe((data) => {
                let specialist = data;
                if (data == null) {
                    this.router.navigate(['/404'])
                    resolve(false)
                } else {          
                    resolve(true);
                }
              })       
            }, 100);
          });      
    }
}