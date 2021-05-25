const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  let len = login.length;
  if (len >= 4 && len <= 16) {
    return false;
  } else {
    return true;
  }
};

const isLoginUnique = function (allLogins, login) {
  if (allLogins.includes(login)) {
    return false;
  } else {
    return true;
  }
};

const addLogin = function (allLogins, login) {
  if (isLoginValid(login)) {
    // console.log("Ошибка! Логин должен быть от 4 до 16 символов");
    return "Ошибка! Логин должен быть от 4 до 16 символов";
  } else if (isLoginUnique(allLogins, login)) {
    // console.log("Такой логин уже используется!");
    return "Такой логин уже используется!";
  } else {
    logins.push(login);
    // console.log("Логин успешно добавлен!");
    return "Логин успешно добавлен!";
  }
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
