import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ServiceStoreService {
  constructor() { }

  public bagArr:any[]=[];
  addToBag(item:any): void{
    this.bagArr.push(item);
    }
}