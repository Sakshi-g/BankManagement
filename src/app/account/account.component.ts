import { Component, OnInit } from '@angular/core';
import{ SharedService} from 'src/app/shared.service';
import {ActivatedRoute} from '@angular/router'
import { FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
