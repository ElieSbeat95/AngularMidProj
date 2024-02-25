import { Component } from '@angular/core';
import { ServiceStoreService } from '../service-store.service';
@Component({
  selector: 'app-men-cat',
  templateUrl: './men-cat.component.html',
  styleUrls: ['./men-cat.component.css']
})
export class MenCatComponent {
  topsMen = [
    {id:1, price: 59, imageUrl:"https://img.ltwebstatic.com/images3_pi/2022/10/18/16660703076e1bf7842fff192ebcd8c82a9d06f21e_thumbnail_600x.webp",
   size: ['S', 'M', 'L', 'XL', 'XXL'], inStock: false},
   {id:2, price: 59, imageUrl:"https://img.ltwebstatic.com/images3_pi/2022/11/24/1669258675c9ccdea7330f9276e83ccfc45633bffe_thumbnail_600x.webp",
   size: ['S', 'M', 'L', 'XL', 'XXL'], inStock: true},
   {id:3, price: 29, imageUrl:"https://img.ltwebstatic.com/images3_pi/2021/12/08/1638933026c22cae14e72ed612850c8c3202f211a0_thumbnail_600x.webp",
   size: ['S', 'M', 'L', 'XL', 'XXL'], inStock: true},
   ]
   constructor(public serviceStore: ServiceStoreService) {}
   sendInfo(item: number) {
    this.serviceStore.addToBag(this.topsMen[item]);
   }
}
