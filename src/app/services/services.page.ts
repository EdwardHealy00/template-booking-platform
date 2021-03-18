import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage {
  deliveryMode = false;

  constructor(public router: Router) {}

  enterMoveMode(){
    this.deliveryMode = false;
    this.router.navigate(['how-long']);
  }

  enterDeliveryMode(){
    this.deliveryMode = true;
    this.router.navigate(['how-long']);
  }
}
