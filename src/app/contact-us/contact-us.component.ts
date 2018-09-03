import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
 contactDetails=[];
  constructor(private dataservice : DataService ) { }

  ngOnInit() {

    this.dataservice.getContactDetails().subscribe( data =>this.contactDetails =data);


  }

}
