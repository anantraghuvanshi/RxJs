import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from '../../appService/design-utility.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-observable',
  imports: [CommonModule],
  templateUrl: './custom-observable.component.html',
  styleUrl: './custom-observable.component.css',
})
export class CustomObservableComponent implements OnInit, OnDestroy {
  constructor(private designUtility: DesignUtilityService) {}

  ngOnDestroy(): void {
    this.sub2.unsubscribe();
  }

  techStatus!: string;
  techStatus2!: string;
  nameStatus!: string;
  sub2!: Subscription;
  names!: string;

  ngOnInit(): void {
    //Example 01 (Manual)
    const cusObj1 = new Observable((observer) => {
      setTimeout(() => {
        observer.next('Angular');
      }, 1000);

      setTimeout(() => {
        observer.next('Java');
      }, 2000);

      setTimeout(() => {
        observer.next('Spring Boot');
        observer.error(new Error('Something went wrong'));
      }, 3000);

      setTimeout(() => {
        observer.next('Javascript');
      }, 4000);

      setTimeout(() => {
        observer.next('GCP');
        observer.complete();
      }, 5000);
    });

    cusObj1.subscribe(
      (res) => {
        this.designUtility.print(res as string, 'elContainer');
      },
      (err) => {
        this.techStatus = 'Error';
      },
      () => {
        this.techStatus = 'Completed';
      }
    );

    // Example - 02 (Custom Interval Observable)

    const arr2 = ['Angular', 'Java', 'Spring Boot', 'Javascript', 'GCP'];
    const cusObj2 = new Observable((observer) => {
      let count = 0;
      const interval = setInterval(() => {
        observer.next(arr2[count]);

        if (count >= 2) {
          observer.complete();
          clearInterval(interval);
        }
        if (count >= 5) {
          observer.error('Emit Error');
          clearInterval(interval);
        }
        count++;
      }, 1000);
    });

    this.sub2 = cusObj2.subscribe(
      (res) => {
        this.designUtility.print(res as string, 'elContainer2');
      },
      (err) => {
        this.techStatus2 = 'Error';
      },
      () => {
        this.techStatus2 = 'Completed';
      }
    );

    // Example - 03 (Random Names)

    const arr3 = ['Anant', 'Singh', 'Raghuvanshi', 'Anushka', 'Vedant'];
    const cusObj3 = new Observable((observer) => {
      let count = 0;
      const interval = setInterval(() => {
        observer.next(arr3[count]);

        if (count >= 2) {
          observer.complete();
          clearInterval(interval);
        }
        if (count >= 5) {
          observer.error('Emit Error');
          clearInterval(interval);
        }
        count++;
      }, 1000);
    });

    cusObj3.subscribe(
      (res) => {
        console.log(res);
        this.names = res as string;
      },
      (err) => {
        this.nameStatus = 'Error';
      },
      () => {
        this.nameStatus = 'Completed';
      }
    );
  }
}
