/* Задание 7
Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста. */

const inputRef = document.getElementById('font-size-control')
const spanRef = document.getElementById('text')

inputRef.addEventListener('input', onInputRange)

function onInputRange(event) {
  spanRef.style.fontSize = `${+event.currentTarget.value}px`
}
