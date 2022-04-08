import { Router } from '@angular/router';
import { AccountService } from './../services/account.service';
import { Bibliotheque } from './../models/bibliotheque.model';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-app-book',
  templateUrl: './app-book.component.html',
  styleUrls: ['./app-book.component.scss']
})
export class AppBookComponent implements OnInit {

  @Input()
  book!: Bibliotheque;

  constructor(private accService: AccountService, private router: Router) { }

  ngOnInit() {
  }

  public verifyConnected(): boolean {
    return this.accService.isConnected();
  }

  redirectToBook(id: number) {
    this.router.navigateByUrl(`book/${id}`);
  }

}
