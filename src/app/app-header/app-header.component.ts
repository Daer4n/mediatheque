import { AccountService } from './../services/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  constructor(private accService: AccountService) { }

  ngOnInit() {
  }

  public verifyConnected(): boolean {
    return this.accService.isConnected();
  }

}
