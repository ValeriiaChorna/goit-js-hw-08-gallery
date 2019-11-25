console.log('=== Задание 2 ===');

const parent = document.querySelector('#ingredients');

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listOfIngredients = ingredients.map((el) => {
  const newListIt = document.createElement('li');
  newListIt.textContent = el;
  return newListIt;
});

parent.append(...listOfIngredients);

console.log('см. на страницу');
