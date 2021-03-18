import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.page.html',
  styleUrls: ['./quote.page.scss'],
})
export class QuotePage {

  constructor(public formService: FormService) {
  }

  getOrderType(): string{
    if(this.formService.deliveryMode) return "Delivery"
    else return "Residential Move";
  }

}
