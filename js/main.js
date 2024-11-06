function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomSentence() {
  const sentences = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];
  return sentences[getRandomInteger(0, sentences.length - 1)];
}

function getRandomName() {
  const names = [
    'Артём', 'Анна', 'Иван', 'Мария', 'Пётр', 'Елена', 'Дмитрий', 'Ольга', 'Сергей', 'Татьяна'
  ];
  return names[getRandomInteger(0, names.length - 1)];
}

function generateComment(id) {
  return {
    id: id,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomSentence(),
    name: getRandomName()
  };
}

function generatePhoto(id) {
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

function generatePhotos() {
  return Array.from({ length: 25 }, (_, index) => generatePhoto(index + 1));
}

const photos = generatePhotos();
