import { renderThumbnails } from './thumbnailRenderer.js';

const tempData = [
  {
    url: 'photos/2.jpg',
    description: 'Beautiful landscape',
    likes: 150,
    comments: 20
  },
  {
    url: 'photos/1.jpg',
    description: 'Great beach',
    likes: 200,
    comments: 30
  },
];

renderThumbnails(tempData);
