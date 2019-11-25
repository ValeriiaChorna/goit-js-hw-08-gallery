console.log('=== Задание 1 ===');

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и
// количество элементов в категории (всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

const listCategories = document.querySelectorAll('li.item');


console.log(`В списке ${listCategories.length} категории.`);

const infOfCategories = [...listCategories].reduce((acc, el) => `${acc
}Категория: ${el.firstElementChild.textContent}`
+ '\n'
+ `Количество элементов: ${el.lastElementChild.children.length}`
+ '\n', '');

console.log(infOfCategories);
