import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
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
    
    //From - Array Example

    const obj2 = from(['Anant', 'Singh', 'Raghuvanshi']);
    obj2.subscribe(res =>{
      console.log(res);
      this.designUtility.print(res, 'elContainer2');
    })

    //From - Promise Example
    
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve('Promise Resolved');
      }, 3000);
    });

    const obj3 = from(promise);
    obj3.subscribe(res =>{
      console.log('from Promise => ', res as string);
      this.designUtility.print(res as string, 'elContainer3');
    })

    //From - String Example
    const obj4 = from('Welcome to RxJs');
    obj4.subscribe(res =>{
      console.log('from Promise => ', res as string);
      this.designUtility.print(res as string, 'elContainer4');
    })
  }

}
