import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myProp: string = 'Go ahead, click the button';

  myMethod() {
    this.myProp = 'That button above me was clicked!';
  }
}
