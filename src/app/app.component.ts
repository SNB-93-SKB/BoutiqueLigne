import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  actions:Array<any>=[
    {title:"Home", "route":"/home",icon:"house"},
    {title:"Produits","route":"/produits",icon:"search"},
    {title:"Newproduit","route":"/newproduit",icon:"save"}
  ]
  currentAction:any;
  setCurrentAction(action:any){
this.currentAction=action;
  }
}
