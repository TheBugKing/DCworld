import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactDetails} from './contact-us/contactInterface';
import {Iabout} from './about/aboutInterface';
import {Observable} from 'rxjs';
import {Icharacter} from './CharacterInterface';
import { Iurl } from './url';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  urlContactDetails= "/assets/data/data.json";
  urlAbout="/assets/data/about.json";
  urlCharacter="/assets/data/characters.json";
  url="http://localhost:3000/mydata";

  constructor( private http: HttpClient) { }

  getContactDetails(): Observable <ContactDetails[] >
  {
    return this.http.get<ContactDetails[]>(this.urlContactDetails);

  }
  getabout(): Observable <Iabout[] >
  {
    return this.http.get<Iabout[]>(this.urlAbout);

  }

  getCharacter():Observable<Icharacter[]>{
    return this.http.get<Icharacter[]>(this.urlCharacter);
  }

  
  getdata(): Observable <Iurl[] >
  {
    return this.http.get<Iurl[]>(this.url);

  }
}
