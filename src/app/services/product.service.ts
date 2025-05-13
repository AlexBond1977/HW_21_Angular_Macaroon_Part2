import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable()
export class ProductService {

  constructor() { }

  public getProducts(): ProductType[] {
    return [
      {
        image: '1.png',
        name: 'Макарун с малиной',
        price: 1.70,
      },
      {
        image: '2.png',
        name: 'Макарун с манго',
        price: 1.70,
      },
      {
        image: '3.png',
        name: 'Пирог с ванилью',
        price: 1.70,
      },
      {
        image: '4.png',
        name: 'Пирог с фисташками',
        price: 1.70,
      },
    ]
  }
}
