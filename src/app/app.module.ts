import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppAccueilComponent } from './app-accueil/app-accueil.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { FormsModule } from '@angular/forms';
import { AppBookComponent } from './app-book/app-book.component';
import { AppReservationComponent } from './app-reservation/app-reservation.component';
import { AppSingleBookComponent } from './app-single-book/app-single-book.component';

@NgModule({
	declarations: [
		AppComponent,
		AppHeaderComponent,
    AppAccueilComponent,
    AppLoginComponent,
    AppBookComponent,
    AppReservationComponent,
    AppSingleBookComponent
   ],
	imports: [
		BrowserModule,
		AppRoutingModule,
    FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
