import {Component} from '@angular/core';
import {ProductType} from "./types/product.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public advantages: {title: string, description: string}[] = [
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

  public products: ProductType[] = [
    {
      image: '1.png',
      name: 'Макарун с малиной',
      price: '1,70 руб.',
    },
    {
      image: '2.png',
      name: 'Макарун с манго',
      price: '1,70 руб.',
    },
    {
      image: '3.png',
      name: 'Пирог с ванилью',
      price: '1,70 руб.',
    },
    {
      image: '4.png',
      name: 'Пирог с фисташками',
      price: '1,70 руб.',
    },
  ]

  public orderFormValues: {product: string, name: string, phone: string} = {
    product: '',
    name: '',
    phone: ''
  }

  public scrollTo(element: HTMLElement): void {
    element.scrollIntoView({behavior: "smooth"});
  }

  public addToOrderForm(product: ProductType, element: HTMLElement): void {
    this.orderFormValues.product = product.name.toUpperCase();
    this.scrollTo(element);
  }

  public showPresent: boolean = true;
  public companyPhone: string = '+375 (29) 368-98-68';
  public companyInstagram: string = 'https://www.instagram.com/';

  public openBurgerMenu(element: HTMLElement): void{
    element.classList.add('open');
  }

  public closeBurgerMenu(element: HTMLElement): void{
    element.classList.remove('open');
  }
}
