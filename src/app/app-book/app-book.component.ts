import { AccountService } from './../services/account.service';
import { AppReservationComponent } from './../app-reservation/app-reservation.component';
import { BibliothequeService } from './../services/bibliotheque.service';
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

  constructor(private biblioService: BibliothequeService, private accService: AccountService, private reservation: AppReservationComponent) { }

  ngOnInit() {
  }

  reserveBook(id: number) {
    this.biblioService.reserveBook(id);
    if (!this.reservation.getAllBooks()) {
      this.reservation.showAvailableBooks();
    }
  }

  public verifyConnected(): boolean {
    return this.accService.isConnected();
  }

}
