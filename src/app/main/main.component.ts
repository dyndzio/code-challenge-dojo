import { Component, OnInit, Input } from '@angular/core';
import {Subscription} from 'rxjs/index';
import {AppService} from '../app.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    @Input() primary: any[];
    @Input() secondary: any[];
    state: Subscription;
    showData: boolean;
    singleData: any[];
  constructor(private appService: AppService) {
      // Subscribe showData value change, we need it to get back from detail view
      this.state = this.appService.getDisplayState().subscribe( data => {
          this.showData = data;
      });
  }

  ngOnInit() {
      // to display the first view
      this.showData = true;
      // Check if string value of array objects is the same as in both jsons
      this.primary.some( (el) => {
        this.secondary.some((elem) => {
              if (JSON.stringify(el).toLowerCase() === JSON.stringify(elem).toLowerCase()) {
                el.same = true;
                  return false;
              }
        });
        return false;
      });
  }
    // attach selected data from primary.js into singleData and change the value from showData
    showAllData(index) {
      this.singleData = this.primary[index];
      this.showData = !this.showData;
    }

}
