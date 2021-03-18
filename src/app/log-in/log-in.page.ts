import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FormService } from '../form.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

  user = {
    email: '', password: ''
  }
  incorrect = false;

  constructor(public router: Router, public ngFireAuth: AngularFireAuth, public formService: FormService) { }

  ngOnInit() {
  }

  async logIn(){

    try{
      const user = await this.ngFireAuth.signInWithEmailAndPassword(this.user.email, this.user.password);
      if (user.user.email){
        this.formService.user = this.user;
        this.router.navigate(['/services']);
     }
    } catch (error) {
      this.incorrect = true;
    }

  }
}
