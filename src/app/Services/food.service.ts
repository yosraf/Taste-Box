import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  public items = new BehaviorSubject<number>(0);
  constructor() {

   }
   public addToCart(item:number){
     this.items.next(item);
   }
}
