import { AccountService } from './../services/account.service';
import { BibliothequeService } from './../services/bibliotheque.service';
import { Bibliotheque } from './../models/bibliotheque.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-reservation',
  templateUrl: './app-reservation.component.html',
  styleUrls: ['./app-reservation.component.scss']
})
export class AppReservationComponent implements OnInit {

  allBooks: boolean = true;
  biblio!: Bibliotheque[];
  constructor(private biblioService: BibliothequeService, private accService: AccountService) { }

  ngOnInit(): void {
    this.biblio = this.biblioService.getAllBooks();
  }

  public getAllBooks(): boolean {
    return this.allBooks;
  }

  showAllBooks() {
    this.biblio = this.biblioService.getAllBooks();
    this.allBooks = true;
  }

  showAvailableBooks() {
    this.biblio = this.biblioService.getAvailableBooks();
    this.allBooks = false;
  }

  public verifyConnected(): boolean {
    return this.accService.isConnected();
  }
}
