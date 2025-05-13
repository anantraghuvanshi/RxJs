import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  imports: [],
  templateUrl: './to-array.component.html',
  styleUrl: './to-array.component.css',
})
export class ToArrayComponent implements OnInit {
  constructor() {}

  users = [
    { name: 'Anup', skill: 'Angular' },
    { name: 'Anant', skill: 'Java' },
    { name: 'Anushka', skill: 'Python' },
    { name: 'Onkar', skill: 'React' },
  ];

  sourceSub!: Subscription;

  ngOnInit(): void {
    //Example 1
    const source = interval(1000);
    this.sourceSub = source.pipe(take(5), toArray()).subscribe((res) => {
      console.log(res);
    });

    //Example 2
    const source2 = from(this.users);
    source2.pipe(toArray()).subscribe((res) => {
      console.log(res);
    });

    //Example 3
    const source3 = of('Anant', 'Singh', 'Raghuvanshi');
    source3.pipe(toArray()).subscribe((res) => {
      console.log(res);
    });
  }
}
