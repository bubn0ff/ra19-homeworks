# Навигационное меню

Реализовать меню для сайта гоночного такси с пунктами «Главная», «Дрифт-такси», «Time Attack» и «Forza Karting». При переходе на страницу соответствующий пункт меню должен подсветиться:

![pic](https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/router/menu/assets/menu.jpg)

## Описание компонента

Компонент должен создавать HTML-разметку вида:

```
<nav class="menu">
  <a class="menu__item" href="/">Главная</a>
  <a class="menu__item" href="/drift">Дрифт-такси</a>
  <a class="menu__item" href="/timeattack">Time Attack</a>
  <a class="menu__item" href="/forza">Forza Karting</a>
</nav>
```

Активный пункт меню помечается классом menu__item-active.

Необходимо реализовать компонет Menu.