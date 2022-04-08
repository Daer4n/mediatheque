import { AccountService } from './account.service';
import { Injectable } from "@angular/core";
import { Bibliotheque } from "../models/bibliotheque.model";


@Injectable({
  providedIn: "root"
})
export class BibliothequeService {

  constructor(private accService: AccountService) { }

  tab: Bibliotheque[] = [
    {
      id: 0,
      title: 'Moby Dick',
      author: 'Herman Melville',
      synopsis: 'Moby-Dick is a novel written by American author Herman Melville. It is the first novel in the Moby-Dick novel series and is Melville\'s only novel to be completely published. The story follows the adventures of the captain and first mate of the whaling ship Pequod, who is pursued by natives of the American West.',
      image: 'https://kbimages1-a.akamaihd.net/6639cb9e-b4ed-40c1-b806-3c6be4bb91f7/1200/1200/False/moby-dick-485.jpg',
      reserved: false,
      byUser: null
    },
    {
      id: 1,
      title: 'Les fleurs du mal',
      author: 'Baudelaire',
      synopsis: 'Les Fleurs du Mal is a French novel by French author Edmond Baudelaire published in 1844. It is the first of the Baudelaire novels to be published in French.',
      image: 'https://gallica.bnf.fr/ark:/12148/bpt6k1512981t/f17.highres',
      reserved: false,
      byUser: null
    },
    {
      id: 2,
      title: 'Le tour du monde en 80 jours',
      author: 'Jules Verne',
      synopsis: 'Le Tour du Monde en 80 jours is a novel by French author Jules Verne published in 1882. It is the first of the Jules Verne novels to be published in French.',
      image: 'https://images-na.ssl-images-amazon.com/images/I/91bKRZ-nnAL.jpg',
      reserved: false,
      byUser: null
    },
    {
      id: 3,
      title: 'Le seigneur des anneaux',
      author: 'J.R.R. Tolkien',
      synopsis: 'Le Seigneur des Anneaux is a 1954 novel by English author J.R.R. Tolkien. It is the sequel to Tolkien\'s 1937 novel The Hobbit and the first of the Lord of the Rings novels to be published in French.',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81JYNcb2pCL.jpg',
      reserved: true,
      byUser: 0
    }
  ];


  public getAllBooks(): Bibliotheque[] {
    return this.tab;
  }

  public getAvailableBooks(): Bibliotheque[] {
    return this.tab.filter(cpt => !cpt.reserved);
  }

  getMyBooks(): Bibliotheque[] {
    return this.tab.filter(cpt => cpt.byUser === this.accService.getId());
  }

  public getBookById(id: number): Bibliotheque {
    let component = this.tab.find(cpt => cpt.id === id);
    if (!component) {
      throw new Error('Livre non trouver');
    } else {
      return component;
    }
  }

  public isReserved(id: number): boolean {
    return this.getBookById(id).reserved;
  }

  public getOwner(id: number): number | null {
    return this.getBookById(id).byUser;
  }

  public reserveBook(id: number): void {
    let component = this.tab.find(cpt => cpt.id === id);
    if (!component) {
      throw new Error('Livre non trouver');
    } else {
      component.reserved = true;
      component.byUser = this.accService.getId();
    }
  }

  public returnBook(id: number): void {
    let component = this.tab.find(cpt => cpt.id === id);
    if (!component) {
      throw new Error('Livre non trouver');
    } else {
      component.reserved = false;
      component.byUser = null;
    }
  }

}
