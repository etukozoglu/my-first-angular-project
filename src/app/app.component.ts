import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name= "Emir";
  title = "Bienvenue sur le site d'" + this.name +  "!" ;
}
