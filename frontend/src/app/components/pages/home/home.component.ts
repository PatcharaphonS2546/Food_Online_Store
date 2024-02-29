import { Component, Input } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { FoodService } from '../../../services/food.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  faHeart = faHeart;
  faStar = faStar;
  faClock = faClock;

  @Input() rating: number = 0;

  foods: Food[]=[];

  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute){
    let foodsObservable : Observable<Food[]>;
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
      foodsObservable = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else if (params.tag)
        foodsObservable = this.foodService.getAllFoodsByTag(params.tag);
      else
      foodsObservable = foodService.getAll();

      foodsObservable.subscribe((serverFoods) => {
        this.foods = serverFoods;
      })
    })
  }

  setRating(value: number) {
    this.rating = value;
  }
}
