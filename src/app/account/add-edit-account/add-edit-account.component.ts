import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormGroup, FormControl} from '@angular/forms'
import { FormsModule } from '@angular/forms';
import {ActivatedRoute} from '@angular/router'
import{ SharedService} from 'src/app/shared.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-edit-account',
  templateUrl: './add-edit-account.component.html',
  styleUrls: ['./add-edit-account.component.css']
})
export class AddEditAccountComponent implements OnInit {
  AccountList : any = [];
  acc:any;
  editAcc = new FormGroup({
  id: new FormControl('5555'),
  customerId: new FormControl(''),
  accountType: new FormControl(''),
  balance: new FormControl('')
})
  const
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

    onSubmit(data){
      this.http.post('https://localhost:7154/api/Account/AddAccount',data,{responseType: 'text' as 'json'})
      .subscribe((result)=>{
        console.warn("result", result)
        alert(result)
      } )
      console.warn(data);

    }

  }
