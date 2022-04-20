import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountComponent} from './account/account.component'
import {CustomerComponent} from './customer/customer.component'
import {TransactionComponent} from './transaction/transaction.component'
import {AddEditAccountComponent} from './account/add-edit-account/add-edit-account.component'
import {EditAccountComponent} from './account/edit-account/edit-account.component'

const routes: Routes = [
  {path: 'account', component:AccountComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'transaction', component: TransactionComponent},
  {path: 'account/add', component: AddEditAccountComponent},
  {path: 'account/update/:id', component: EditAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
