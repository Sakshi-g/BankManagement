import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { AccountComponent } from './account/account.component';

import { TransactionComponent } from './transaction/transaction.component';

import { ViewCustomersComponent } from './customer/view-customers/view-customers.component';
import { ViewTransactionsComponent } from './transaction/view-transactions/view-transactions.component';
import { ViewAccountsComponent } from './account/view-accounts/view-accounts.component';

import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddEditAccountComponent } from './account/add-edit-account/add-edit-account.component';
import { EditAccountComponent } from './account/edit-account/edit-account.component'

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    AccountComponent,
    TransactionComponent,
    ViewCustomersComponent,
    ViewTransactionsComponent,
    ViewAccountsComponent,
    AddEditAccountComponent,
    EditAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent],
  entryComponents: [AddEditAccountComponent, ViewAccountsComponent]

})
export class AppModule { }
