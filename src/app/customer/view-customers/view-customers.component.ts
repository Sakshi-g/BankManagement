import { Component, OnInit } from '@angular/core';
import{ SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit {

  constructor(private service: SharedService) { }
  CustomerList : any = [];

  ngOnInit(): void {
    this.refreshCustomerList();
  }
  refreshCustomerList(){
    this.service.getCustomerList().subscribe(data =>{
      this.CustomerList = data;
    } )
  }
}
