const checkboxController = () => {
  const checkboxContent = document.querySelectorAll('.input-chbox');
  const checkbox = document.querySelectorAll('.input-chbox__button');

  for (let i = 0; i < checkboxContent.length; i += 1) {
    checkboxContent[i].addEventListener('click', () => {
      if (checkbox[i].classList.contains('input-chbox__button--checked')) {
        checkbox[i].classList.remove('input-chbox__button--checked');
      } else {
        checkbox[i].classList.add('input-chbox__button--checked');
      }
    });
  }
};

checkboxController();
