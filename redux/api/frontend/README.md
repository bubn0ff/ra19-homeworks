# API

Переделать проект с лекции с использованием Router, а также нормальной обработкой загрузки и отображения ошибок.

Всё состояние должно храниться в Redux Store. Для взаимодействия с HTTP - fetch и Redux Thunk.

## Basic Level

При переходе на главную страницу пользователя должно перенаправлять автоматически на адрес '/services', на котором загружается список услуг (GET http://localhost:7070/api/services).

При загрузке данных (GET) должен отображаться спиннер (лоадер):

![pic1](https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/redux/api/assets/spinner.png)

При получении ошибки (статус не 2xx):

![pic2](https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/redux/api/assets/error.png)

При нормальных загруженных данных:

![pic3](https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/redux/api/assets/list.png)

Для главной страницы сервер присылает данные в формате:

[
    {"id":1,"name":"Замена стекла","price":21000},
    {"id":2,"name":"Замена дисплея","price":25000},
    {"id":3,"name":"Замена аккумулятора","price":4000},
    {"id":4,"name":"Замена микрофона","price":2500}
]

При нажатии на кнопку удалить происходит удаление записи с последующей загрузкой всего списка.

Для удаления необходимо отправить запрос DELETE http://localhost:7070/api/serviced/:id, где id - id сервиса.

При нажатии на кнопку редактировать происходит переход по адресу: '/services/:id`, где id - это id сервиса.

В форму подтягиваются данные через GET-запрос (требования к отображению лоадара и ошибок - соответствующие):

![pic4](https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/redux/api/assets/edit.png)

Обратить внимание, что в форме есть поле content, которое приходит, только если сделать запрос GET http://localhost:7070/api/services/:id:

{
    "id":1,
    "name":"Замена стекла",
    "price":21000,
    "content":"Стекло оригинал от Apple"
}

При нажатии на кнопку Отмена происходит возврат к предыдущей странице.

При нажатии на кнопку Сохранить происходит сохранение записи. При этом:

  1. Спиннер должен отображаться.
  2. Если сохранение прошло успешно, выполняется переход на страницу со списком.
  3. Если сохранение прошло с ошибкой, переход не осуществляется, высвечивается сообщение об ошибке.

Для сохранения необходимо отправить POST-запрос по адресу http://localhost:7070/api/services, передав весь JSON (с id).

## Advanced Level (необязательная часть)

Сделать так, чтобы при нажатии на кнопку удалить в списке вместо кнопок появлялся спиннер:

![pic5](https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/redux/api/assets/remove-spinner.png)

Обратить внимание, что "в состоянии удаления" могут быть одновременно несколько записей (как на картинке).

То же самое с формой редактирования: отключать всю форму и рисовать спиннер не вместо всей формы, а только на кнопке:

![pic6](https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/redux/api/assets/edit-spinner.png)
