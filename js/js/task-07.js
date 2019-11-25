console.log('=== Задание 7 ===');

// Напиши скрипт, который реагирует на изменение значения input#font-size-control
// (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.

console.log('см. на страницу');

const refs = {
  inputValue: document.querySelector('input#font-size-control'),
  outputValue: document.querySelector('span#text'),
};

refs.inputValue.addEventListener('input', changeFontSize);

function changeFontSize({ target }) {
  refs.outputValue.style.fontSize = `${target.value}px`;
}
