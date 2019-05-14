const checkboxController = () => {
  const checkboxContent = document.querySelectorAll('.checkbox-button__content');
  const checkbox = document.querySelectorAll('.checkbox-button__button');

  for (let i = 0; i < checkboxContent.length; i += 1) {
    checkboxContent[i].addEventListener('click', () => {
      if (checkbox[i].classList.contains('checkbox-button__button--checked')) {
        checkbox[i].classList.remove('checkbox-button__button--checked');
      } else {
        checkbox[i].classList.add('checkbox-button__button--checked');
      }
    });
  }
};
checkboxController();
