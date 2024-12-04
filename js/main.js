import { renderThumbnails } from './render-thumbnails';
import { renderModal } from './render-big-picture';
import { resetComments } from './comments.js';

renderThumbnails();
renderModal();

resetComments([
  { avatar: 'photos/1.jpg', name: 'User1', message: 'Комментарий 1' },
  { avatar: 'photos/2.jpg', name: 'User2', message: 'Комментарий 2' },
  { avatar: 'photos/3.jpg', name: 'User3', message: 'Комментарий 3' },
]);
