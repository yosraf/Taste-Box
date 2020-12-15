import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  public itemsCount = new BehaviorSubject<number>(0);
  public itemsList = new BehaviorSubject([]);
  constructor() {

   }
   public addToCart(item:number,list){
     this.itemsCount.next(item);
     this.itemsList.next(list);
   }
}
