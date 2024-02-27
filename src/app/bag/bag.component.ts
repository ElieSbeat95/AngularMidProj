import { Component, OnInit } from '@angular/core';
import { ServiceStoreService } from '../service-store.service';
@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent {
  totalPrice:number=0
  bagTotal:any[];
constructor(public serviceStore: ServiceStoreService) {
    this.bagTotal=this.serviceStore.bagArr;
  }
  ngOnInit():void{ //To call getTotalPrice() once every time entered to bag
    this.getTotalPrice();
  } 
  
  getTotalPrice():void{
    for(let item in this.bagTotal){
      this.totalPrice+=Number(this.bagTotal[item].price);
  }
}
removeFromBag(item:any):void{
  this.serviceStore.removeFromBag(item);
  this.totalPrice-=Number(item.price);
}
}

