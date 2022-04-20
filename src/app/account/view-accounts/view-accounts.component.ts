import { Component, OnInit } from '@angular/core';
import{ SharedService} from 'src/app/shared.service';
import {ActivatedRoute} from '@angular/router'
import { FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-view-accounts',
  templateUrl: './view-accounts.component.html',
  styleUrls: ['./view-accounts.component.css']
})
export class ViewAccountsComponent implements OnInit {
  editAcc = new FormGroup({
  id: new FormControl('5555'),
  customerId: new FormControl(''),
  accountType: new FormControl(''),
  balance: new FormControl('')
})

  constructor(private service: SharedService) { }
  AccountList : any = [];
  ModalTitle: string;
  ActivateAddEditAccountComponent: boolean = false;
  acc:any;

  ngOnInit(): void {
    this.refreshAccountList();

  }

  addClick(){
    this.acc = {
      customerId: 0,
      accountType: "",
      balance: 0
    }
    this.ModalTitle = "Add Account";
    this.ActivateAddEditAccountComponent = true;
  }
  closeClick(){
    this.ActivateAddEditAccountComponent = false;
    this.refreshAccountList();
  }

  deleteClick(item){
    if(confirm('Are you Sure?')){
      this.service.deleteAccount(item.id).subscribe(data=>{
        alert("Account Deleted");
        this.refreshAccountList();
      })
    }

  }
  refreshAccountList(){
    this.service.getAccountList().subscribe(data =>{
      this.AccountList = data;
    } )
  }

}
