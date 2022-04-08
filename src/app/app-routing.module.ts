import { AppSingleBookComponent } from './app-single-book/app-single-book.component';
import { AppReservationComponent } from './app-reservation/app-reservation.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppAccueilComponent } from './app-accueil/app-accueil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{path: '', component: AppAccueilComponent},
	{path: 'login', component: AppLoginComponent},
	{path: 'reservation', component: AppReservationComponent},
  {path: 'book/:id', component: AppSingleBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
