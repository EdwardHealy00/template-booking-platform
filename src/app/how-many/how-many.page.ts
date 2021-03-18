import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../form.service';

@Component({
  selector: 'app-how-many',
  templateUrl: './how-many.page.html',
  styleUrls: ['./how-many.page.scss'],
})
export class HowManyPage {

  constructor(public router: Router, public formService: FormService) { }

  navigateToQuote(hourlyPrice: number){
    this.formService.hourlyPrice = hourlyPrice;
    this.router.navigate(['/quote']);
  }

}
