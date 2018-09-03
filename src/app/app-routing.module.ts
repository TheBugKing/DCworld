import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PagenotfoundComponent  } from './pagenotfound/pagenotfound.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CharacterAboutComponent } from './character-about/character-about.component';


const routes :Routes=[
    {path:'', redirectTo:'/home',pathMatch:'full'},
    {path:'home', component: HomeComponent},
    {path:'character/:id', component: CharacterAboutComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contactus', component: ContactUsComponent},
    {path:'**', component: PagenotfoundComponent}
];

@NgModule({
imports : [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
export const routepaths = [AboutComponent,ContactUsComponent,CharacterAboutComponent,PagenotfoundComponent]