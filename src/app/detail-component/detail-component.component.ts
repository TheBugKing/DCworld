import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-detail-component',
  templateUrl: './detail-component.component.html',
  styleUrls: ['./detail-component.component.css']
})
export class DetailComponentComponent implements OnInit {

  characters:Object;
  received_CharacterId;
  constructor(private serviceInstance:DataService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.serviceInstance.getCharacter().subscribe(
      data=>this.characters=data
    );

    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=parseInt(params.get('id'));
      this.received_CharacterId=id;
    
    });

  }
}

