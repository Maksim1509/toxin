const currentPage = 'pagination__item--current';
const page = document.querySelectorAll('.pagination__item');

const addClass = (elem, classToAdd) => {
  const a = document.querySelector(`.${currentPage}`);
  a.classList.remove(currentPage);
  elem.classList.add(classToAdd);
};

Array.from(page).map(
  node => node.addEventListener('click', () => addClass(node, currentPage)),
);
