import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public character=[];
public selectedId;

  constructor( private router: Router, private route: ActivatedRoute, private service:DataService) { }

  ngOnInit() {
    this.service.getCharacter().subscribe(
      data=>this.character=data
    );
     
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=parseInt(params.get('characterId'));
      this.selectedId=id;
    });   
  }
  onSelect(character){
  this.router.navigate(['/character',character.characterId]);

 }
 isselected(character){
   return character.id === this.selectedId;
 }
}
