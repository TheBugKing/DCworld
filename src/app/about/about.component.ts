import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
public about=[];
public url=[];
  constructor(private aboutservice:DataService) { }

  ngOnInit() {

    this.aboutservice.getabout().subscribe( data =>this.about =data);

    this.aboutservice.getdata().subscribe( data =>this.url =data);
  }

}
