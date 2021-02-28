/* Задание 4
* Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
* Создай переменную counterValue в которой будет хранится текущее значение счетчика.
* Создай функции increment и decrement для увеличения и уменьшения значения счетчика
* Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

 */
let counterValue = 0
const valueRef = document.querySelector('#value')

const btnDecRef = document.querySelector('[data-action="decrement"]')
const btnIncRef = document.querySelector('[data-action="increment"]')

btnDecRef.addEventListener('click', () => {
  counterValue -= 1
  counter()
})

btnIncRef.addEventListener('click', () => {
  counterValue += 1
  counter()
})

const counter = () => (valueRef.textContent = counterValue)
