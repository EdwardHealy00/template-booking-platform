import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from '../form.service';

@Component({
  selector: 'app-how-long',
  templateUrl: './how-long.page.html',
  styleUrls: ['./how-long.page.scss'],
})
export class HowLongPage {
  currentTime: string = new Date().toISOString();
  minTime = '09:00';
  maxTime = '21:00';

  date: string = this.currentTime;
  from: string = this.minTime;
  to: string = this.maxTime;

  constructor(public router: Router, public formService: FormService) { }

  changeDate($event){
    this.date = $event.detail.value;
  }

  changeFromTime($event){
    this.from = $event.detail.value;
  }

  changeToTime($event){
    this.to = $event.detail.value;
  }

  navigateToHowMany(){
    this.formService.time.date = this.date;
    this.formService.time.from = this.from;
    this.formService.time.to = this.to;
    this.router.navigate(['/how-many']);
  }
}
