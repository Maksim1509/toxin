
const expandCheckbox = () => {

  const icon = document.querySelector('.checkbox-list__icon');
  const title = document.querySelector('.checkbox-list__title');
  const checkboxes = document.querySelectorAll('.checkbox-list__content');
  title.addEventListener('click', () => {
    if (title.classList.contains('expand')) {
      Array.from(checkboxes).map(elem => elem.classList.remove('checkbox-list__content--show'));
      icon.textContent = 'expand_more';
      title.classList.remove('expand');
    } else {
      Array.from(checkboxes).map(elem => elem.classList.add('checkbox-list__content--show'));
      icon.textContent = 'expand_less';
      title.classList.add('expand');
    }
  });
};
expandCheckbox();
