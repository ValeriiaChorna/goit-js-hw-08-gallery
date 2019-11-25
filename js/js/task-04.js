console.log('=== Задание 4 ===');

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const ref = {
  decrBtn: document.querySelector('button'),
  incrBtn: document.querySelector('button[data-action="increment"]'),
  counterSpan: document.querySelector('#value'),
};

// console.log(ref);

let counterValue = 0;

const incrValue = function incr() {
  counterValue += 1;
  ref.counterSpan.textContent = counterValue;
};

const decrValue = function decr() {
  counterValue -= 1;
  ref.counterSpan.textContent = counterValue;
};

ref.decrBtn.addEventListener('click', decrValue);
ref.incrBtn.addEventListener('click', incrValue);

console.log('см. на страницу');

// или с одним слушателем:
// const counter = {
//     body: document.querySelector("#counter"),
//     outputValue: document.querySelector("#value"),
//     value: 0,
//     increment() {
//       this.value = this.value + 1;
//       this.outputValue.textContent = this.value;
//     },
//     decrement() {
//       this.value = this.value - 1;
//       this.outputValue.textContent = this.value;
//     }
//   };

//   function eventHandler({ target }) {
//     counter[target.dataset.action]();
//   }

//   counter.body.addEventListener("click", eventHandler);
