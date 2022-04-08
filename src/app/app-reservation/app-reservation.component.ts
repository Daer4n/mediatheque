import { Injectable } from '@angular/core';
import { AccountService } from './../services/account.service';
import { BibliothequeService } from './../services/bibliotheque.service';
import { Bibliotheque } from './../models/bibliotheque.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-reservation',
  templateUrl: './app-reservation.component.html',
  styleUrls: ['./app-reservation.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class AppReservationComponent implements OnInit {

  allBooks: number = 0;
  biblio!: Bibliotheque[];
  constructor(private biblioService: BibliothequeService, private accService: AccountService) { }

  ngOnInit(): void {
    this.biblio = this.biblioService.getAllBooks();
  }

  public getAllBooks(): number {
    return this.allBooks;
  }

  showAllBooks() {
    this.biblio = this.biblioService.getAllBooks();
    this.allBooks = 0;
  }

  showAvailableBooks() {
    this.biblio = this.biblioService.getAvailableBooks();
    this.allBooks = 1;
  }

  showMyBooks() {
    this.biblio = this.biblioService.getMyBooks();
    this.allBooks = 2;
  }

  public verifyConnected(): boolean {
    return this.accService.isConnected();
  }
}
