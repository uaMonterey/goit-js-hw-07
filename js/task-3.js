// Задание 3
// Напиши скрипт для создания галлереи изображений по массиву данных.

// Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
]

const makeAtibutsForElement = (images) => {
  const { url, alt } = images

  return `<li class='gallery__item'><img src='${url}, alt='${alt}'</li>`
}
console.log(makeAtibutsForElement(images))

const galleryEl = document.querySelector('#gallery')
console.log(galleryEl)

const templateGallety = images.map(makeAtibutsForElement).join(' ')
console.log(templateGallety)

galleryEl.insertAdjacentHTML('afterbegin', templateGallety)

let x = '+dsadsf+da-sfs+'

console.log(x.replace(/[+, -]/gi, ''))
