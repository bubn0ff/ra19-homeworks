# Список и детали

Написать проект, использующий React Router и Redux Observable, который удовлетворяет следующим условиям:

  1.  На главной странице показывается список услуг (редактирование не нужно, достаточно просто ссылок) - данные загружаются методом GET на http://localhost:7070/api/services
  2.  При переходе по ссылке (/:id/details), загружаются детали услуги - GET на http://locahost:7070/api/services/:id

При загрузке должен отображаться индикатор загрузки (что на странице списка, что на странице деталей):

![pic1](https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/observable/main-details/assets/spinner.png)

При ошибке - показываться сообщение об ошибке и кнопка "Повторить запрос", при нажатии на которой осуществляется попытка снова выполнить запрос (с индикатором загрузки и т.д.):

![pic2](https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/observable/main-details/assets/retry.png)

Готовый бэкенд расположен в каталоге backend.