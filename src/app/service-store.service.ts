import { Injectable } from '@angular/core';
import { BagComponent } from './bag/bag.component';
@Injectable({
  providedIn: 'root'
})
export class ServiceStoreService {
  constructor() { }

  public bagArr:any[]=[];
  addToBag(item:any): void{
    this.bagArr.push(item);
    }
    public removeFromBag(item:any):void{
      let i=0;
      for(i=0;i<this.bagArr.length;i++){
        if (this.bagArr[i]==item) {
            this.bagArr.splice(i,1);   
    }
  }
}
}