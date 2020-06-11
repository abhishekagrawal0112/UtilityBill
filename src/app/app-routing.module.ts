import { LoginComponent } from './login/login.component';
import { MilkBillComponent } from './milk-bill/milk-bill.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'milk',
    component: MilkBillComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
