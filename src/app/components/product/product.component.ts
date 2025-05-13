import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductType} from "../../types/product.type";


@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() public product: ProductType;

  @Output() public addToCartEvent: EventEmitter<ProductType> = new EventEmitter<ProductType>();
  constructor() {
    this.product = {
      image: '',
      name: '',
      price: 0
    }
  }

  ngOnInit(): void {
  }

  public addProductToCart(){
    this.addToCartEvent.emit(this.product);
  }

}
