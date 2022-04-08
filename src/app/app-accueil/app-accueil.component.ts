import { AccountService } from './../services/account.service';
import { Account } from './../models/account.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-accueil',
  templateUrl: './app-accueil.component.html',
  styleUrls: ['./app-accueil.component.scss']
})
export class AppAccueilComponent implements OnInit {
  username!: string | null;

  constructor(private accService: AccountService) { }

  ngOnInit() {
    this.username = this.accService.getUsername();
  }

  public verifyConnected(): boolean {
    return this.accService.isConnected();
  }

}
