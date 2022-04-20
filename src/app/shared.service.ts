import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "https://localhost:7154/api";

  constructor(private http:HttpClient) { }
  getCustomerList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl + "/Customer/GetAllCustomers");
  }

  addAccount(val:any){
    return this.http.post(this.APIUrl+'/Account/AddAccount', val,{responseType: 'text' as 'json'});
  }

  deleteAccount(val){
    return this.http.delete(this.APIUrl+'/Account/DeleteAccount?accountNumber='+val,{responseType: 'text' as 'json'});
  }


    getAccountList(): Observable<any[]>{
      return this.http.get<any>(this.APIUrl + "/Account/GetAllAccounts");
  }
  getTransactionList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl + "/Transaction/GetAllTransactions");
}

  getCurrentAccount(id){
    return this.http.get(this.APIUrl+"/Account/GetAccount?accountNumber="+id, {responseType: 'text' as 'json'})
  }

  updateAccount(id, data){
    return this.http.put(this.APIUrl+"/Account/UpdateAccount?accountNumber="+id, {responseType: 'text' as 'json'})
  }
}
