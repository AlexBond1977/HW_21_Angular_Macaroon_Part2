# HW21AngularMacaroon

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.13.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


Домашка к уроку «Контрольное задание 21»
Для этой контрольной работы вам нужно взять проект с макарунами, который вы перенесли на Angular при выполнении прошлой контрольной работы.

Вам необходимо:
Создать сервис, который возвращает список товаров по аналогии с тем, как было в уроке. Цены товаров должны храниться без валюты, просто цифры.
Иконку подарка внизу переделайте в плавающую корзину (пример того, как она должна выглядеть и иконка корзины приложены в материалах к контрольной). Затем нужно реализовать глобальный сервис, который будет выводить количество товаров и сумму покупок в корзине, по аналогии с тем, как это было в уроке про сервисы.
Реализовать компонент для вывода преимуществ.
Создать компонент для вывода товаров
Компонент должен принимать товар с помощью декоратора @Input и выводить карточку этого товара.
При клике на кнопку «Заказать» происходит два действия:
- В глобальном сервисе корзины происходит изменение количества товаров и общей суммы
- При помощи @Output происходит уведомление родительского компонента о добавлении товара в корзину. Родительский компонент, в свою очередь, показывает через alert сообщение с текстом «(название товара) добавлен в корзину!»
  Создать директиву, которая добавляет эффекты кнопкам.
  Директива должна принимать два параметра:
- background, который кнопка имеет по умолчанию
- background, который будет применяться при наведении
  Не забудьте добавить дефолтные background.
  Примените директиву к кнопкам на странице.
  С помощью пайпа CurrencyPipe вывести цены в карточках товаров в формате "1.70 руб."
  Создать кастомный пайп, который будет сокращать текст описания преимущества до 95 символов. Если текст меньше - остается как и был. Если больше чем 95 символов, то остальной текст обрезается и к тексту добавляется три точки.
  Создать кастомный пайп для форматирования номера телефона. Он должен принимать номер в формате «375293689868» (то есть просто цифры), а выводить в формате «+375 (29) 368-98-68» (как сейчас в проекте).
  В компоненте измените номер телефона на формат «375293689868» и примените к ним созданный пайп.
  Пайп не нужно делать универсальным для номеров разных стран, он должен корректно работать только с текущим (белорусским) номером.