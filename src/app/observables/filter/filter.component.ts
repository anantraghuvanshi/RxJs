import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent implements OnInit{
  data!: any;
  data2!: any;
  data3!: any;

  dataArray = [
    { id: 1, name: 'Anant', gender: 'Male'},
    { id: 2, name: 'Anushka', gender: 'Female'},
    { id: 3, name: 'Upasna', gender: 'Female'},
    { id: 4, name: 'Onkar', gender: 'Male'},
    { id: 5, name: 'Manju', gender: 'Female'},
    { id: 6, name: 'Aradhana', gender: 'Feamle'},
    { id: 7, name: 'Vaibhaw', gender: 'Male'},
    { id: 8, name: 'Vikas', gender: 'Male'},
    { id: 9, name: 'Poonam', gender: 'Female'},
    { id: 10, name: 'Rajesh', gender: 'Male'},
    { id: 11, name: 'Yash', gender: 'Male'}
  ]

  ngOnInit(): void {
    const source = from(this.dataArray);

    //Example 01
    source.pipe(
      filter(data => data.name.length > 5),
      toArray()
    )
    .subscribe(res => {
      console.log(res);
      this.data = res;
    })

    //Example 02
    source.pipe(
      filter(data => data.gender === 'Female'),
      toArray()
    )
    .subscribe(res => {
      console.log(res);
      this.data2 = res;
    })

    //Example 03
    source.pipe(
      filter(data => data.id < 6),
      toArray()
    )
    .subscribe(res => {
      console.log(res);
      this.data3 = res;
    })
  }

}
