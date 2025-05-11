import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from '../../appService/design-utility.service';

@Component({
  selector: 'app-from-event',
  imports: [],
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.css'
})
export class FromEventComponent implements OnInit, AfterViewInit{
  constructor(private designUtility: DesignUtilityService) { }
  ngAfterViewInit(): void {
    let count = 1;
    fromEvent(this.addBtn?.nativeElement, 'click').subscribe(res => {
      let countVal = 'Video ' + count++;
      console.log(countVal);
      this.designUtility.print(countVal, 'elContainer');
    })
  }

  @ViewChild('addBtn') addBtn: ElementRef | undefined;

  ngOnInit(): void {
    
  }

}
