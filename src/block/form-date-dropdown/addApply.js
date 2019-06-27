export default () => {
  const datapickers = document.querySelectorAll('.datepicker');

  Array.from(datapickers).map((datapicker) => {
    const buttons = datapicker.querySelector('.datepicker--buttons');
    const hasApply = buttons.querySelector('.-apply-');
    if (hasApply) {
      return;
    }
    const applyBtn = document.createElement('span');
    applyBtn.classList.add('datepicker--button');
    applyBtn.classList.add('-apply-');
    applyBtn.textContent = 'применить';
    buttons.appendChild(applyBtn);

    applyBtn.addEventListener('click', function () {
      const currentDatapicker = this.parentElement.parentElement.parentElement;
      currentDatapicker.removeAttribute('style');
    });
  });
};
