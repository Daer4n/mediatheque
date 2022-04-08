import { AccountService } from './../services/account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent implements OnInit {
  username!: string;
  password!: string;

  constructor(private accService: AccountService, private router: Router) { }

  ngOnInit() {
    localStorage.setItem('connected', 'false');
  }

  onSubmitConnect() {
    try{
      this.accService.connect(this.username, this.password);
      this.router.navigateByUrl('/');
    } catch(e) {
      console.log(e);
      throw new Error('Problème de connexion, veuillez vérifier vos identifiants');
    }
  }

}
