import { Component, OnInit, Input, Output } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import { EventEmitter } from 'events';
import { DataService } from '../data.service';
@Component({
  selector: 'app-character-about',
  templateUrl: './character-about.component.html',
  styleUrls: ['./character-about.component.css']
})
export class CharacterAboutComponent implements OnInit {
  public characterID;
  public disable;
  public idone=false;
  public idend=false;
  
  

  constructor( private route : ActivatedRoute, private router: Router) { }

  ngOnInit() {


    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=parseInt(params.get('id'));
      this.characterID=id;
      if(this.characterID===1){
        this.idone=true;
      }
      else{
        this.idone=false;
      }

      if(this.characterID===7){
        this.idend=true;
      }
      else{
        this.idend=false;
      }
      
  
    });   
   
    }
   

  goPrevious(){
    let previousCharacterId= this.characterID -1;

    this.router.navigate(['/character',previousCharacterId]);

  }

  goNext(){
    let nextCharacterId= this.characterID + 1;
    this.router.navigate(['/character',nextCharacterId]);
    
  }

  gotocharacter(){
    let selectedId =this.characterID ? this.characterID:null;
    this.router.navigate(['/home',{id:selectedId}]);
  }


  }

   
  

