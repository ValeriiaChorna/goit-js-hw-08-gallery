console.log('=== Задание 3 ===');

const imgGallery = document.querySelector('#gallery');

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
];

const imgList = images.map(({ url, alt }) => `<li> <img src="${url}", width = 100%, alt="${alt}"> </li>`).join('');


imgGallery.insertAdjacentHTML('beforeend', imgList);

console.log('см. на страницу');

imgGallery.style.display = 'flex';
imgGallery.style.flexWrap = 'wrap';

const listItems = imgGallery.querySelectorAll('li');

listItems.forEach((e) => {
  e.style.listStyle = 'none';
  e.style.flexBasis = '500px';
  e.style.padding = '20px';
});
