import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user = {
    email: '', password: ''
  }
  incorrect = false;

  constructor(public router: Router, public ngFireAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async register(){
    try{
      const user = await this.ngFireAuth.createUserWithEmailAndPassword(this.user.email, this.user.password);
      if (user.user.email){  this.router.navigate(['/services']); }
    } catch (error) {
      this.incorrect = true;
    }
  }

}
