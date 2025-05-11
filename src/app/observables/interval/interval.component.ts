import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignUtilityService } from '../../appService/design-utility.service';

@Component({
  selector: 'app-interval',
  imports: [],
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.css'
})
export class IntervalComponent implements OnInit {
  obsMsg: any;
  videoSusbcribe!: Subscription;

  constructor(private designUtility: DesignUtilityService) {}

  ngOnInit(): void {
    const broadcastVideo = interval(1000);
    // const broadcastVideo = timer(delay, time);
    this.videoSusbcribe = broadcastVideo.subscribe(res => {
      this.obsMsg = 'Video ' + res;
      this.designUtility.print(this.obsMsg, 'elContainer');
      this.designUtility.print(this.obsMsg, 'elContainer2');
      this.designUtility.print(this.obsMsg, 'elContainer3');

      if(res >= 5){
        this.videoSusbcribe.unsubscribe();
      }
    })
  }

}
