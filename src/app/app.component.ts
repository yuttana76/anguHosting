import { Component } from '@angular/core';
import { ROUTING } from './app.routing'
import { RouterModule, Routes ,Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  router :Router;



  title = 'app';
  companyName = 'KML TECH';
  footerMSG ='Powered by Angular Team,Google developer. Contact: yuttana76@gmail.com Thailand ';
  fa_fb='';
  fa_tw='';
  fa_gl='';
  fa_li='';

  constructor(private _router: Router ) {
    this.router = _router;
  }
}
