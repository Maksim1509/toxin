const expandCheckbox = () => {
  const icon = document.querySelector('.checkbox-list__icon');
  const title = document.querySelectorAll('.checkbox-list__title');
  Array.from(title).map(el => el.addEventListener('click', (e) => {
    const checkboxes = e.target.parentNode.parentNode.querySelectorAll('.checkbox-list__content');
    if (el.classList.contains('expand')) {
      Array.from(checkboxes).map(elem => elem.classList.remove('checkbox-list__content--show'));
      icon.textContent = 'expand_more';
      el.classList.remove('expand');
    } else {
      Array.from(checkboxes).map(elem => elem.classList.add('checkbox-list__content--show'));
      icon.textContent = 'expand_less';
      el.classList.add('expand');
    }
  }));
};
expandCheckbox();
