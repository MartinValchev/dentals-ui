import { Component, OnInit} from '@angular/core';
import { SpecialistService } from './shared/specialist.service';
import { ISpecialist } from './shared/specialist.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    template: './specialist-detail.component.html',
    styles: [`
    .container { padding-left: 20px; padding-right: 20px }
    .event-image { height: 100px; }
    `]
})
export class SpecialistDetailComponent implements OnInit {

    specialist: ISpecialist;

    constructor(private specialistService: SpecialistService, private route: ActivatedRoute) {}

    ngOnInit(){
        let id  = this.route.snapshot.params['id'];
        this.specialistService.getSpecialist(id).subscribe((data) => {
            this.specialist = data;      
        });

    }

}  