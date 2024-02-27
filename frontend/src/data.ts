import { Food } from "./app/shared/models/Food";
import { Tag } from "./app/shared/models/tag";

export const sample_foods: Food[] = [
  {
    id:'1',
    name: 'Americano',
    price: 9,
    cookTime:['10-15'],
    favorite: false,
    origin:['America'],
    stars:4.0,
    imageUrl: 'assets/images/test_americano.jpg',
    tags: ['Drink', 'Coffee', 'Lunch']
  },
  {
    id:'2',
    name: 'Americano',
    price: 9,
    cookTime:['10-15'],
    favorite: false,
    origin:['America'],
    stars:4.0,
    imageUrl: 'assets/images/test_americano.jpg',
    tags: ['Drink', 'Coffee', 'Lunch']
  },
  {
    id:'3',
    name: 'Americano',
    price: 9,
    cookTime:['10-15'],
    favorite: false,
    origin:['America'],
    stars:4.0,
    imageUrl: 'assets/images/test_americano.jpg',
    tags: ['Drink', 'Coffee', 'Lunch']
  },
  {
    id:'4',
    name: 'late',
    price: 9,
    cookTime:['10-15'],
    favorite: false,
    origin:['America'],
    stars:4.0,
    imageUrl: 'assets/images/test_americano.jpg',
    tags: ['Drink', 'test', 'Lunch']
  },
]

export const sample_tags:Tag[] = [
  {name: 'All', count: 4},
  {name: 'Coffee', count: 3},
  {name: 'test', count: 1}
]
