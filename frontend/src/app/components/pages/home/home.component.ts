import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../service/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  foods: Food[]=[

  ];

  constructor(private foodService: FoodService){
    this.foods = foodService.getAll();
  }

}
