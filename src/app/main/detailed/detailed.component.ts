import { Component, OnInit, Input } from '@angular/core';
import {AppService} from '../../app.service';
@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.scss']
})
export class DetailedComponent implements OnInit {
  @Input() singleData: any[];
  constructor(private appService: AppService) { }

  ngOnInit() {

  }
    goBack() {
    // Change the value of subscribed element in main.component.ts
        this.appService.changeDisplayState(true);
    }
}
