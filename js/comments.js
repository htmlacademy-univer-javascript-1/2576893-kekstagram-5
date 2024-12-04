const commentsList = document.querySelector('.social__comments'); // список комментариев
const commentCountBlock = document.querySelector('.social__comment-count'); // счётчик комментариев
const loadMoreButton = document.querySelector('.comments-loader'); // кнопка "Загрузить ещё"

let comments = []; // список всех комментариев
let shownCommentsCount = 0; // количество отображаемых комментариев
const COMMENTS_TO_SHOW = 5; // сколько комментариев показывать за раз

export const updateComments = () => {
  const fragment = document.createDocumentFragment();
  const nextComments = comments.slice(shownCommentsCount, shownCommentsCount + COMMENTS_TO_SHOW);

  nextComments.forEach((comment) => {
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');
    commentElement.innerHTML = `
      <img class="social__picture" src="${comment.avatar}" alt="${comment.name}" width="35" height="35">
      <p class="social__text">${comment.message}</p>
    `;
    fragment.appendChild(commentElement);
  });

  commentsList.appendChild(fragment);

  shownCommentsCount += nextComments.length;

  commentCountBlock.textContent = `${shownCommentsCount} из ${comments.length} комментариев`;

  if (shownCommentsCount >= comments.length) {
    loadMoreButton.classList.add('hidden');
  }
};

// Сброс интерфейса и инициализация
export const resetComments = (newComments) => {
  comments = newComments;
  shownCommentsCount = 0;
  commentsList.innerHTML = '';
  loadMoreButton.classList.remove('hidden');
  updateComments();
};

// Обработчик клика
loadMoreButton.addEventListener('click', updateComments);
