import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/Services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categories = [
    "All",
    "Meats",
    "Pasta",
    "Pizza",
    "Sandwichs",
    "Burgers",
    "Salads",
    "Grills"
  ];
  foodList = [];
  selectedFoodList = [];
  selectedItems = 0;

  constructor(private service: FoodService) { }
  filter(categorie: string) {
    if (categorie === "All") {
      this.initFoodList();
    }
    else {
      this.initFoodList();
      this.foodList = this.foodList.filter(plat => plat.categorie === categorie);

    }
  }
  initFoodList() {
    this.foodList = [
      {
        "categorie": "Pizza",
        "restaurent": "Pizza hot",
        "name": "Neapolitan Pizza",
        "image": "https://cdnimg.webstaurantstore.com/uploads/buying_guide/2014/11/pizzatypes-margherita-.jpg",
        "state": false
      },
      {
        "categorie": "Pizza",
        "restaurent": "Pizza hot",
        "name": "Chicago Pizza",
        "image": "https://cdnimg.webstaurantstore.com/uploads/buying_guide/2014/11/pizzatypes-deepdish.jpg",
        "state": false

      },
      {
        "categorie": "Pizza",
        "restaurent": "Pizza hot",
        "name": "California Pizza",
        "image": "https://cdnimg.webstaurantstore.com/uploads/buying_guide/2014/11/pizzatypes-gourmet.jpg",
        "state": false

      },
      {
        "categorie": "Salads",
        "restaurent": "Salad",
        "name": "Caesar Salad",
        "price": "",
        "image": "https://theurbantandoor.com/wp-content/uploads/2019/11/caesar-salad.jpg",
        "state": false
      },
      {
        "categorie": "Salads",
        "restaurent": "Salad",
        "name": "Nicoise Salad",
        "image": "https://theurbantandoor.com/wp-content/uploads/2019/11/nicoise-salad.jpg",
        "state": false
      },
      {
        "categorie": "Salads",
        "restaurent": "Salad",
        "name": "BBQ Potato Salad",
        "image": "https://theurbantandoor.com/wp-content/uploads/2019/11/bbq-potato-salad.jpg",
        "state": false
      }
    ]
  }
  ngOnInit(): void {
    this.initFoodList()
  }
  addToCart(name: string) {
    this.selectedItems++;
    this.selectedFoodList.push(this.foodList.filter(el => el.name === name)[0]);
    this.service.addToCart(this.selectedItems, this.selectedFoodList);
    this.foodList.find(food => food.name === name).state = true;
  }
  removeFromCart(name: string) {
    this.selectedItems--;
    this.selectedFoodList.splice(this.foodList.indexOf(name),1);

    this.service.addToCart(this.selectedItems, this.selectedFoodList);
    this.foodList.find(food => food.name === name).state = false;
  }

}
