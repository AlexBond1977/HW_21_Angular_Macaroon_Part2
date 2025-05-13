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
  protected readonly advantages: AdvantagesType[] = [
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

  protected products: ProductType[] = [];
  protected quantity: number = 0;
  protected sum: number = 0;

  public ngOnInit() {
    this.products = this.productService.getProducts();
  }

  protected orderFormValues: OrderFormType = {
    product: '',
    name: '',
    phone: ''
  }

  protected scrollTo(element: HTMLElement): void {
    element.scrollIntoView({behavior: "smooth"});
  }

  protected addToOrderForm(product: ProductType, element: HTMLElement): void {
    this.orderFormValues.product = product.name.toUpperCase();
    this.cartService.quantity++;
    this.quantity = this.cartService.quantity;
    this.cartService.sum += product.price;
    this.sum = this.cartService.sum;
    this.scrollTo(element);
    alert(product.name + ' добавлен в корзину!')
  }

  protected readonly showPresent: boolean = true;
  protected readonly companyPhone: string = '375293689868';
  protected readonly companyInstagram: string = 'https://www.instagram.com/';

  protected openBurgerMenu(element: HTMLElement): void{
    element.classList.add('open');
  }

  protected closeBurgerMenu(element: HTMLElement): void{
    element.classList.remove('open');
  }
}
