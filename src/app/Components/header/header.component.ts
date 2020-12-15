import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/Services/food.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selectedItems = 0;
  list = [];
  constructor( private service:FoodService) {
   
   }

  ngOnInit(): void {
    this.service.itemsCount.subscribe(item => this.selectedItems=item);
    this.service.itemsList.subscribe(list => this.list = list);
  }
 
}
