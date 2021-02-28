/* Задание 6
Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.

Для добавления стилей, используй CSS-классы valid и invalid.
 */

const refs = {
  input: document.querySelector('#validation-input'),
  specificLength: +document.querySelector('#validation-input').getAttribute('data-length'),
}

refs.input.addEventListener('blur', onInputBlur)

function onInputBlur(event) {
  if (refs.specificLength === event.currentTarget.value.length) {
    event.currentTarget.classList.remove('invalid')
    event.currentTarget.classList.add('valid')
  }
  if (refs.specificLength !== event.currentTarget.value.length) {
    event.currentTarget.classList.remove('valid')
    event.currentTarget.classList.add('invalid')
  }
  if (event.currentTarget.value.length === 0) {
    event.currentTarget.classList.remove('valid')
    event.currentTarget.classList.remove('invalid')
  }
}
