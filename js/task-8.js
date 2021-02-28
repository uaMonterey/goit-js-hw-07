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

let amountBoxes

inputRef.addEventListener('input', getAmountBoxes)

function getAmountBoxes({ target }) {
  amountBoxes = +target.value
  // console.log(amountBoxes)
  return amountBoxes
}

amountBoxes = [...Array(+e.target.value)].map((_, idx) => ++idx)

function createBoxes() {
  const boxFactory = document.createElement('div')
  boxFactory.style.width = `30px`
  boxFactory.style.height = `30px`
  boxFactory.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  storage.append(boxFactory)
}
