console.log('=== Задание 5 ===');

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input),
// подставляет его текущее значение в span#name-output.
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.


const refs = {
  inputValue: document.querySelector('input#name-input'),
  nameOutput: document.querySelector('span#name-output'),
};


refs.inputValue.addEventListener('input', ({ target }) => {
//   const { target } = e;  //деструктуризация: вытягивает отдельно target из event
  if (target.value.length === 0) {
    refs.nameOutput.textContent = 'незнакомец';
  } else { refs.nameOutput.textContent = target.value; }
});

console.log('см. на страницу');
