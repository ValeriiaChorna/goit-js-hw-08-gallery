console.log('=== Задание 6 ===');

// Напиши скрипт, который бы при потере фокуса на инпуте,
// проверял его содержимое на правильное количество символов.

// Cколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым,
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.


const inputValue = document.querySelector('input#validation-input');


inputValue.addEventListener('blur', validation);

function validation({ target }) {
  if (+target.value.length === +target.dataset.length) {
    target.classList.add('valid');
    target.classList.remove('invalid');
  } else {
    target.classList.add('invalid');
    target.classList.remove('valid');
  }
}

console.log('см. на страницу');
