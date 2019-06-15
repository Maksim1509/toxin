const likeBtn = document.querySelectorAll('.like-btn__wrap');

const elems = Array.from(likeBtn);

const contolLikeBtn = () => {
  elems.map(elem => elem.addEventListener('click', () => {
    const count = elem.querySelector('.like-btn__count');
    const inputCheckbox = elem.previousSibling;
    if (inputCheckbox.checked) {
      count.textContent = Number(count.textContent) - 1;
    } else {
      count.textContent = Number(count.textContent) + 1;
    }
  }));
};

contolLikeBtn();
