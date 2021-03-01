/* 
* Задание 8 - дополнительное, выполнять не обязательно

Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes. */

const mainDiv = document.querySelector('#controls')
const inputRef = document.querySelector('input')
const btnRenderRef = document.querySelector('[data-action="render"]')
const btnDestroyRef = document.querySelector('[data-action="destroy"]')
const storage = document.querySelector('#boxes')

let amountBoxes = 0

inputRef.addEventListener('input', getAmountBoxes)

btnDestroyRef.addEventListener('click', desroing)

btnRenderRef.addEventListener('click', rendering)

function getAmountBoxes({ target }) {
  amountBoxes = +target.value

  return amountBoxes
}

const boxFactory = () => {
  return [...Array(amountBoxes)]
    .map((_, idx) => +idx)
    .map((el) => {
      const boxElement = document.createElement('div')
      boxElement.style.marginTop = `10px`
      boxElement.style.width = ` ${el * 10 + 30}px`
      boxElement.style.height = ` ${el * 10 + 30}px`
      boxElement.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
      return boxElement
    })
}

function desroing() {
  storage.innerHTML = ''
}

function rendering() {
  const boxesMarkup = boxFactory(amountBoxes)
  storage.append(...boxesMarkup)
}
