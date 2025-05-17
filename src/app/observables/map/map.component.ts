import { Component, OnInit } from '@angular/core';
import { from, interval, map, Subscription } from 'rxjs';
import { DesignUtilityService } from '../../appService/design-utility.service';

@Component({
  selector: 'app-map',
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent implements OnInit{
  constructor(private designUtilityService: DesignUtilityService) {}

  sub1!: Subscription;
  sub2!: Subscription;
  message1!: string;
  message2!: number;

  ngOnInit(): void {
    const broadcastVideos = interval(1000);

    //Example 01
    this.sub1 = broadcastVideos.pipe( 
      map(data => 'Video ' + data)
    )
    .subscribe(res => {
      this.message1 = res;
      
    })

    setTimeout(() => {
      this.sub1.unsubscribe();
    }, 5000);

    //Example 02
    this.sub2 = broadcastVideos.pipe( 
      map(data => data * 3)
    )
    .subscribe(res => {
      this.message2 = res;
      
    })

    setTimeout(() => {
      this.sub2.unsubscribe();
    }, 5000);

    //Example 03
    const members = [
      {id: 1, name: 'Anant'},
      {id: 2, name: 'Singh'},
      {id: 3, name: 'Raghuvanshi'},
      {id: 4, name: 'Anushka'},
      {id: 5, name: 'Upasna'},
      {id: 6, name: 'Onkar'},
      {id: 7, name: 'Manju'},
      {id: 8, name: 'Kashyap'},
    ]

    let memObs = from(members);
    memObs.pipe(
      map(member => member.name)
    ).subscribe(res => {
      console.log(res);
      this.designUtilityService.print(res, 'elContainer');
    })

  }

}
