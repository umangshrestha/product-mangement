import { Injectable } from '@angular/core';
import { IProduct } from '../products/entity/product.entity';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb() {
    const products = [
      {
        "id": 1,
        "name": "Leaf Rake",
        "code": "GDN-0011",
        "releaseDate": "March 19, 2021",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "rating": 3.2,
        "imageUrl": "assets/images/leaf-rake.webp"
      },
      {
        "id": 2,
        "name": "Garden Cart",
        "code": "GDN-0023",
        "releaseDate": "March 18, 2021",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "rating": 4.2,
        "imageUrl": "assets/images/garden-cart.jpg"
      },
      {
        "id": 3,
        "name": "Hammer",
        "code": "TBX-0048",
        "releaseDate": "May 21, 2021",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "rating": 4.8,
        "imageUrl": "assets/images/hammer.jpg"
      },
      {
        "id": 4,
        "name": "Saw",
        "code": "TBX-0022",
        "releaseDate": "May 15, 2021",
        "description": "15-inch steel blade hand saw",
        "price": 11.55,
        "rating": 3.7,
        "imageUrl": "assets/images/saw.jpg"
      },
      {
        "id": 5,
        "name": "Video Game Controller",
        "code": "GMG-0042",
        "releaseDate": "October 15, 2020",
        "description": "Standard two-button video game controller",
        "price": 35.95,
        "rating": 4.6,
        "imageUrl": "assets/images/xbox.jpg"
      }
    ];
    return { products };
  }

  genId(heroes: IProduct[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

}
