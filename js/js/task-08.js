console.log('=== Задание 8 ===');

console.log('см. на страницу');

// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция. При нажатии на кнопку Очистить,
// коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
//  Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const refs = {
  controlsBtn: document.querySelector('#controls'),
  inputValue: document.querySelector("input[type='number']"),
  renderBtn: document.querySelector('button[data-action="render"]'),
  destroyBtn: document.querySelector('button[data-action="destroy"]'),
  output: document.querySelector('#boxes'),
};


refs.renderBtn.addEventListener('click', createBoxes);
refs.destroyBtn.addEventListener('click', destroyBoxes);

function createRandomValue() {
  return Math.floor(Math.random() * 256);
}

function createRandomRGB() {
  return `rgb(${createRandomValue()}, ${createRandomValue()}, ${createRandomValue()})`;
}

function createBoxes() {
  const divSize = 30;
  const items = Array(Number(refs.inputValue.value))
    .fill(0)
    .map((e, i) => {
      const div = document.createElement('div');
      div.style.cssText = `background-color: ${createRandomRGB()}; width: ${divSize
        + i * 10}px; height: ${divSize + i * 10}px;`;
      return div;
    });
  refs.output.append(...items);
}

function destroyBoxes() {
  refs.output.innerHTML = '';
  refs.input.value = '';
}
