import {Component, OnInit} from '@angular/core';
import {ProductType} from "./types/product.type";
import {AdvantagesType} from "./types/advantages.type";
import {OrderFormType} from "./types/order-form.type";
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProductService]
})
export class AppComponent implements OnInit{
  public advantages: AdvantagesType[] = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнообразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    }
  ]

  constructor(private productService: ProductService,
              private cartService: CartService) {
  }

  public products: ProductType[] = [];
  public quantity: number = 0;
  public sum: number = 0;
  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  public orderFormValues: OrderFormType = {
    product: '',
    name: '',
    phone: ''
  }

  public scrollTo(element: HTMLElement): void {
    element.scrollIntoView({behavior: "smooth"});
  }

  public addToOrderForm(product: ProductType, element: HTMLElement): void {
    this.orderFormValues.product = product.name.toUpperCase();
    this.cartService.quantity++;
    this.quantity = this.cartService.quantity;
    this.cartService.sum += product.price;
    this.sum = this.cartService.sum;
    this.scrollTo(element);
    alert(product.name + ' добавлен в корзину!')
  }

  public showPresent: boolean = true;
  public companyPhone: string = '375293689868';
  public companyInstagram: string = 'https://www.instagram.com/';

  public openBurgerMenu(element: HTMLElement): void{
    element.classList.add('open');
  }

  public closeBurgerMenu(element: HTMLElement): void{
    element.classList.remove('open');
  }
}
