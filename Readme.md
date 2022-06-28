# Личный проект «Кекстаграм»

* Студент: [Григорий Плаксин](https://up.htmlacademy.ru/javascript/26/user/2139941).
* Наставник: `Максим Волков`(https://htmlacademy.ru/profile/id1508839).

---

_Не удаляйте и не изменяйте самовольно файлы и папки:_
_`.editorconfig`, `.eslintrc`, `.gitattributes`, `.gitignore`, `package-lock.json`, `package.json`., `.github`_

---

[Как работать с Git на проекте](Contributing.md) | [Как работать над проектом](Workflow.md)

### Памятка

#### 1. Зарегистрируйтесь на Гитхабе

Если у вас ещё нет аккаунта на [github.com](https://github.com/join), скорее зарегистрируйтесь.

#### 2. Создайте форк

Откройте репозиторий и нажмите кнопку «Fork» в правом верхнем углу. Репозиторий из Академии будет скопирован в ваш аккаунт.

<img width="769" alt="" src="https://user-images.githubusercontent.com/10909/35275222-1d624452-0050-11e8-8aca-06d2832724ce.png">

Получится вот так:

<img width="769" alt="" src="https://user-images.githubusercontent.com/10909/35275223-1d7cf9fa-0050-11e8-829b-98ac3c9a4f8b.png">

#### 3. Клонируйте репозиторий на свой компьютер

Будьте внимательны: нужно клонировать свой репозиторий (форк), а не репозиторий Академии. Также обратите внимание, что клонировать репозиторий нужно через SSH, а не через HTTPS. Нажмите зелёную кнопку в правой части экрана, чтобы скопировать SSH-адрес вашего репозитория:

<img width="769" alt="" src="https://user-images.githubusercontent.com/10909/35275224-1d97a7dc-0050-11e8-89f9-41c9a7b2ae9c.png">

Клонировать репозиторий можно так:

```
git clone SSH-адрес_вашего_форка
```

Команда клонирует репозиторий на ваш компьютер и подготовит всё необходимое для старта работы.

#### 4. Начинайте обучение!

---

<a href="https://htmlacademy.ru/intensive/javascript"><img align="left" width="50" height="50" alt="HTML Academy" src="https://up.htmlacademy.ru/static/img/intensive/javascript/logo-for-github-2.png"></a>

Репозиторий создан для обучения на интенсивном онлайн‑курсе «[JavaScript. Профессиональная разработка веб-интерфейсов](https://htmlacademy.ru/intensive/javascript)» от [HTML Academy](https://htmlacademy.ru).

## Рекомендации по модулям

Пообещайте себе, что модуль `main.js` и только он будет обращаться к переменной `document`. Объясните себе это неудобство тем, что только `main.js` фактически подключен к index.html документу. Остальные модуль оказываются привлечены к работе косвенно, по желанию `main.js`.

Пообещайте себе, что любой модуль, приложит все усилия, чтобы не иметь кода на верхнем уровне. Вот два примера

```js
//панковский безолаберный модуль punk.js
import {userInfo} from './user-info.js';
const template = document.querySelector('#profile');
const avatar = template.querySelector('.avatar');
avatar.src = userInfo.photo;
export avatar;
```

лучше обернуть вычисления в функцию, которую экспортировать

```js
// модуль пионер-всем-пример pioneer.js
export const getAvatar = (userInfo, template)=>{
  const result = template.cloneNode(true);
  const avatar = result.querySelector('.avatar');
  avatar.src = userInfo.photo;
  return result;
}
```

таким образом вы отправите процесс общения с `document`, а пионерский модуль можно будет использовать в разных документах html, ведь он не будет зациклен, на том, чтобы шаблон был с `id=profile`
