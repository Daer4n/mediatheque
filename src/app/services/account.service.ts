import { Injectable } from "@angular/core";
import { Account } from "../models/account.model";


@Injectable({
  providedIn: "root"
})
export class AccountService {
  tab: Account[] = [
    {
      id: 0,
      username: 'admin',
      password: 'admin',
      connected: false
    },
    {
      id: 1,
      username: 'user',
      password: 'user',
      connected: false
    },
    {
      id: 2,
      username: 'guest',
      password: 'guest',
      connected: false
    }
  ];

  public getAllAccounts(): Account[] {
    return this.tab;
  }

  public getAccountById(id: number): Account {
    let component = this.tab.find(cpt => cpt.id === id);
    if (!component) {
      throw new Error('Compte non trouver');
    } else {
      return component;
    }
  }

  getId(): number {
    let component = this.tab.find(cpt => cpt.connected === true);
    if (!component) {
      throw new Error('Compte non trouver');
    } else {
      return component.id;
    }
  }

  public getUsername(): string {
    let component = this.tab.find(cpt => cpt.connected === true);
    if (!component) {
      throw new Error('Compte non trouver');
    } else {
      return component.username;
    }
  }

  public connect(username: string, password: string): void {
    let component = this.tab.find(cpt => cpt.username === username && cpt.password === password);
    if (!component) {
      throw new Error('Compte non trouver');
    } else {
      if (component.connected === false) {
        component.connected = true;
      }
    }
  }

  public isConnected(): boolean {
    let component = this.tab.find(cpt => cpt.connected === true);
    if (!component) {
      return false;
    } else {
      return true;
    }
  }

}
