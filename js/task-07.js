const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
// let login;
// let log = String(login);

const isLoginValid = function (login) {
  console.log('log : ' + login);
  console.log(login.length >= 4 && login.length <= 16 ? true : false);
  return login.length >= 4 && login.length <= 16 ? true : false;
};

const isLoginUnique = function (allLogins, login) {
  console.log('log : ' + login);
  console.log(allLogins.includes(login));
  return allLogins.includes(login);
};

const addLogin = function (allLogins, login) {
  console.log(login);
  if (!isLoginValid(login)) {
    return 'Ошибка! Логин должен быть от 4 до 16 символов';
  }

  if (isLoginUnique(allLogins, login)) {
    console.log(logins);
    console.log(login);
    return 'Такой логин уже используется!';
  }

  logins.push(login);
  console.log(logins)
  return 'Логин успешно добавлен!';
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, '123456'));