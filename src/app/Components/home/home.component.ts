import { Component, OnInit } from '@angular/core';

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
  foodList = []

  constructor() { }
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
        "price": "",
        "image": "https://cdnimg.webstaurantstore.com/uploads/buying_guide/2014/11/pizzatypes-margherita-.jpg"
      },
      {
        "categorie": "Pizza",
        "restaurent": "Pizza hot",
        "name": "Chicago Pizza",
        "price": "",
        "image": "https://cdnimg.webstaurantstore.com/uploads/buying_guide/2014/11/pizzatypes-deepdish.jpg"
      },
      {
        "categorie": "Pizza",
        "restaurent": "Pizza hot",
        "name": "California Pizza",
        "price": "",
        "image": "https://cdnimg.webstaurantstore.com/uploads/buying_guide/2014/11/pizzatypes-gourmet.jpg"
      },
      {
        "categorie": "Salads",
        "restaurent": "Salad",
        "name": "Caesar Salad",
        "price": "",
        "image": "https://theurbantandoor.com/wp-content/uploads/2019/11/caesar-salad.jpg"
      },
      {
        "categorie": "Salads",
        "restaurent": "Salad",
        "name": "Nicoise Salad",
        "price": "",
        "image": "https://theurbantandoor.com/wp-content/uploads/2019/11/nicoise-salad.jpg"
      },
      {
        "categorie": "Salads",
        "restaurent": "Salad",
        "name": "BBQ Potato Salad",
        "price": "",
        "image": "https://theurbantandoor.com/wp-content/uploads/2019/11/bbq-potato-salad.jpg"
      }
    ]
  }
  ngOnInit(): void {
    this.initFoodList()
  }

}
