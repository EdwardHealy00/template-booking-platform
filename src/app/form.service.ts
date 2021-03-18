import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  user = {
    email: '', password: ''
  }

  deliveryMode: boolean;

  time = {
    date: '', from: '', to: ''
  }

  hourlyPrice: number;

  constructor() { }

  calculatePrice(){
    const hoursFrom = +this.time.from.slice(0, this.time.from.indexOf(':'));
    const hoursTo = +this.time.to.slice(0, this.time.from.indexOf(':'));

    const minutesFrom = +this.time.from.slice(this.time.from.indexOf(':') + 1);
    const minutesTo = +this.time.to.slice(this.time.from.indexOf(':') + 1);

    const totalFrom = (hoursFrom * 60 + minutesFrom) / 60;
    const totalTo = (hoursTo * 60 + minutesTo) / 60;
    const total = totalTo - totalFrom;

    return total * this.hourlyPrice;
  }
}
