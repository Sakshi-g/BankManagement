import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule,  Validators } from '@angular/forms'
import {ActivatedRoute} from '@angular/router'
import{ SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent implements OnInit {
  editAccount = new FormGroup({
  customerId: new FormControl(''),
  accountType: new FormControl(''),
  balance: new FormControl(''),
})

  constructor(private router: ActivatedRoute, private account: SharedService) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params.id)
    this.account.getCurrentAccount(this.router.snapshot.params.id).
    subscribe((result) =>{
      this.editAccount = new FormGroup({
        customerId: new FormControl(result['customerId']),
        accountType: new FormControl(result['accountType']),
        balance: new FormControl(result['balance'])
      })
      console.warn("result", result)
    } )
  }

  collection(){
    console.warn(this.editAccount.value);

    this.account.updateAccount(this.router.snapshot.params.id, this.editAccount.value)
    .subscribe((result) => console.warn(result))
  }
}
