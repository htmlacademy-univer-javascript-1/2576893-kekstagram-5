import { renderThumbnails } from './thumbnailRenderer.js';
import { openFullscreen } from './fullscreenRenderer.js';
//import { generateComment, generatePhoto, generatePhotos } from './fullscreenRenderer.js';

const tempData = [
  {
    url: 'photos/1.jpg',
    description: 'Beautiful landscape',
    likes: 150,
    comments: [
      {
        avatar: 'img/avatar-1.svg',
        name: 'John Doe',
        message: 'Beautiful photo!'
      },
      {
        avatar: 'img/avatar-2.svg',
        name: 'Jane Smith',
        message: 'Amazing!'
      }
    ]
  },
  {
    url: 'photos/2.jpg',
    description: 'Cute cat',
    likes: 200,
    comments: [
      {
        avatar: 'img/avatar-3.svg',
        name: 'Alice Johnson',
        message: 'So cute!'
      },
      {
        avatar: 'img/avatar-4.svg',
        name: 'Bob Brown',
        message: 'Adorable!'
      }
    ]
  },
  // Добавьте больше данных по необходимости
];

// Вызов функции для отрисовки миниатюр
renderThumbnails(tempData);

// Обработчик событий для открытия полноразмерного изображения
const picturesContainer = document.querySelector('.pictures');
picturesContainer.addEventListener('click', (evt) => {
  const pictureElement = evt.target.closest('.picture');
  if (pictureElement) {
    const pictureIndex = Array.from(picturesContainer.children).indexOf(pictureElement);
    openFullscreen(tempData[pictureIndex]);
  }
});
