import { Component } from '@angular/core';
import { ServiceStoreService } from '../service-store.service';
@Component({
  selector: 'app-women-cat',
  templateUrl: './women-cat.component.html',
  styleUrls: ['./women-cat.component.css']
})
export class WomenCatComponent {
  topsWomen = [
    {id:1, price: 29, imageUrl:"https://img.ltwebstatic.com/images3_pi/2021/08/23/1629682006eaf5ff14779dd81d11a5f73bd138d866_thumbnail_900x.webp",
   size: ['XS','S', 'M', 'L'], inStock:true},
   {id:2, price: 59, imageUrl:"https://img.ltwebstatic.com/images3_pi/2021/08/09/1628484011244d66babe85579cd414d8b93d8160b9_thumbnail_900x.webp",
   size: ['XS','S', 'M', 'L', 'XL'], inStock:true},
   {id:3, price: 49, imageUrl:"https://img.ltwebstatic.com/images2_pi/2019/07/17/15633453544083295325_thumbnail_900x1199.webp", size: ['XS','S', 'M', 'L',
   'XL'], inStock:true},
   ]
   constructor(public serviceStore: ServiceStoreService) {}
   sendInfo(item: number) {
    this.serviceStore.addToBag(this.topsWomen[item]);
   }

}
