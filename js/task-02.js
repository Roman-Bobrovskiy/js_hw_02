const calculateEngravingPrice = function (message, pricePerWord) {
  //   console.log(pricePerWord);
  //   console.log(message.split(" ").length);
  //message.split(" ").length - ЗЛО!!!, почти как дартвейдер.  Но теперь я умею периводить текст в массив и считать его длину)))
  //Долго просидел, не знал, что можно  записать через точку несколько команд. :)
  return message.split(" ").length * pricePerWord;
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
); // 80
console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
); // 160
console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
); // 240
console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
); // 120
