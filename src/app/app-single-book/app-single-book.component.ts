import { ActivatedRoute } from '@angular/router';
import { Bibliotheque } from './../models/bibliotheque.model';
import { AppReservationComponent } from './../app-reservation/app-reservation.component';
import { AccountService } from './../services/account.service';
import { BibliothequeService } from './../services/bibliotheque.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-single-book',
  templateUrl: './app-single-book.component.html',
  styleUrls: ['./app-single-book.component.scss']
})
export class AppSingleBookComponent implements OnInit {

  @Input()
  book!: Bibliotheque;

  constructor(
    private biblioService: BibliothequeService,
    private accService: AccountService,
    private reservation: AppReservationComponent,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const idRoute = +this.route.snapshot.params['id']
		this.book = this.biblioService.getBookById(idRoute);

  }

  reserveBook(id: number) {
    this.biblioService.reserveBook(id);
    if (this.reservation.getAllBooks() === 1) {
      this.reservation.showAvailableBooks();
    } else if (this.reservation.getAllBooks() === 2) {
      this.reservation.showMyBooks();
    }
  }

  returnBook(id: number) {
    this.biblioService.returnBook(id);
    if (this.reservation.getAllBooks() === 1) {
      this.reservation.showAvailableBooks();
    } else if (this.reservation.getAllBooks() === 2) {
      this.reservation.showMyBooks();
    }
  }

  public verifyConnected(): boolean {
    return this.accService.isConnected();
  }

  public ownedByMe(id: number): boolean {
    if (this.biblioService.getOwner(id) === this.accService.getId()) {
      return true;
    } else {
      return false;
    }
  }

}
