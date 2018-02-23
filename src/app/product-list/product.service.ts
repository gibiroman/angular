import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() {
  }
  getProducts() {
    return [
      {
        productName: 'Oranges',
        imageUrl: './assets/orange.jpeg',
        inStock: true,
        lastRenewed: 1518092805000
      },
      {
        productName: 'Ducks',
        imageUrl: './assets/ducks.png',
        inStock: true,
        lastRenewed: 1518092805000
      }
    ];
  }
}
