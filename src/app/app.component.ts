import { Component } from '@angular/core';
import primary from './primary.json';
import secondary from './secondary.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'code-challenge-dojo';
    primary: any[];
    secondary: any[];
    constructor() {
      // sort primary json ascendable
      this.primary = primary.sort((a, b) => {
          return a.start_time - b.start_time;
      });
      this.secondary = secondary;
    }


}
