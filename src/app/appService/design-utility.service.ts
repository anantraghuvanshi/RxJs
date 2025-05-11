import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  print(str: string, containerId: string){
    let element = document.createElement('li');
    element.innerText= str;

    document.getElementById(containerId)?.appendChild(element);
  }
}
