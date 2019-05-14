const likeBtn = document.querySelector('.like-btn__input');
const count = document.querySelector('.like-btn__count');


likeBtn.addEventListener('change', () => {
  if (likeBtn.checked) {
    count.textContent = Number(count.textContent) + 1;
  } else {
    count.textContent = Number(count.textContent) - 1;
  }
});
