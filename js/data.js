import { getRandomInteger, getRandomSentence, getRandomName } from './util.js';

export function generateComment(id) {
  return {
    id: id,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomSentence(),
    name: getRandomName()
  };
}

export function generatePhoto(id) {
  const commentsCount = getRandomInteger(0, 30);
  const comments = Array.from({ length: commentsCount }, (_, index) => generateComment(index + 1));

  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: `Описание фотографии ${id}`,
    likes: getRandomInteger(15, 200),
    comments: comments
  };
}

export function generatePhotos() {
  return Array.from({ length: 25 }, (_, index) => generatePhoto(index + 1));
}
