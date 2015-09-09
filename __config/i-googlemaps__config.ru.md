### config

Элемент определяет настройки подключаемой библиотеки GoogleMapsApi. Настройки хранятся как свойства объекта, возвращаемого элементом.

В текущей реализации доступно поле `url`, которое содержит строку с URL для скачивания GoogleMapsApi. URL автоматически используется при подключении блока, в случае, если библиотека не была подключена предварительно.


```js
modules.define('i-googlemaps__config', ['i-googlemaps__config'], function(provide, config) {

provide(this.name, {
    config.url = '//maps.googleapis.com/maps/api/js?signed_in=true&language=ar&callback=initMap';  
});
});
```
