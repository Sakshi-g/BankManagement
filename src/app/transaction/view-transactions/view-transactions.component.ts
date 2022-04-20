import { Component, OnInit } from '@angular/core';
import{ SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-view-transactions',
  templateUrl: './view-transactions.component.html',
  styleUrls: ['./view-transactions.component.css']
})
export class ViewTransactionsComponent implements OnInit {

  constructor(private service: SharedService) { }
  TransactionList : any = [];

  ngOnInit(): void {
    this.refreshTrasactionList();
  }
  refreshTrasactionList(){
    this.service.getTransactionList().subscribe(data =>{
      this.TransactionList = data;
    } )
  }
}
