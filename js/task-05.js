const checkForSpam = function (message) {
  let checkLowerCase = message.toLowerCase();
  if (checkLowerCase.includes("sale") || checkLowerCase.includes("spam")) {
    return true;
  } else {
    return false;
  }
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
