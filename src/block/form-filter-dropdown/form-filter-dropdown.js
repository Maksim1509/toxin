import $ from 'jquery';
import airDatapicker from 'air-datepicker';

const formFilterDates = $('.form-filter-dropdown');
Array.from(formFilterDates).map(formFilterDate => $(formFilterDate).datepicker({
  navTitles: {
    days: 'MM <i>yyyy</i>',
  },
  range: true,
  multipleDatesSeparator: ' - ',
  prevHtml: '<i class="material-icons">arrow_back</i>',
  nextHtml: '<i class="material-icons">arrow_forward</i>',
  clearButton: true,
}));

const addApply = () => {
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
      const currentDatapicker = this.parentElement.parentElement;
      console.log(currentDatapicker);
      currentDatapicker.style.left = '-9999999px';

      Array.from(formFilterDates).map(elem => elem.blur());
    });
  });
};

addApply();
