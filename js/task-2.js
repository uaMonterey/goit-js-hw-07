// Задание 2
// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().

const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы']

const ingredientsList = document.querySelector('#ingredients')

const addElements = (arr) => {
  return arr.map((el) => {
    const listElements = document.createElement('li')
    listElements.textContent = el

    return listElements
  })
}
const elements = addElements(ingredients)
ingredientsList.append(...elements)
