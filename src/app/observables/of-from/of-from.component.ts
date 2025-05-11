import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { DesignUtilityService } from '../../appService/design-utility.service';

@Component({
  selector: 'app-of-from',
  imports: [],
  templateUrl: './of-from.component.html',
  styleUrl: './of-from.component.css'
})
export class OfFromComponent implements OnInit{

  constructor(private designUtility: DesignUtilityService) {}

  ngOnInit(): void {
    //Of Example

    const obj1 = of('Anant', 'Singh', 'Raghuvanshi');
    obj1.subscribe(res =>{
      console.log(res);
      this.designUtility.print(res, 'elContainer');
    })
    
  }

}
