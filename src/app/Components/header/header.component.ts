import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { FoodService } from 'src/app/Services/food.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchForm : FormGroup;
  selectedItems = 0;
  constructor(private fb: FormBuilder, private service:FoodService) {
    this.searchForm= this.fb.group({
      search: new FormControl('')
    });
   }

  ngOnInit(): void {
    this.service.items.subscribe(item => this.selectedItems=item)
  }
  onSubmit(){

  }

}
