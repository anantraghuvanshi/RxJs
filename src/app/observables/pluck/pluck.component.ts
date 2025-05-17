import { Component, OnInit } from '@angular/core';
import { from, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  imports: [],
  templateUrl: './pluck.component.html',
  styleUrl: './pluck.component.css',
})
export class PluckComponent implements OnInit {
  constructor() {}

  data!: any;

  users = [
    {
      name: 'Anant',
      skills: 'Angular',
    },
    {
      name: 'Anushka',
      skills: 'DSA',
    },
    {
      name: 'Upasna',
      skills: 'Economics',
    },
    {
      name: 'Vipul',
      skills: 'SQL',
    },
  ];

  ngOnInit(): void {
    from(this.users)
      .pipe(pluck('name'), toArray())
      .subscribe((res) => {
        console.log(res);
        this.data = res;
      });
  }
}
