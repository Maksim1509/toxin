import $ from 'jquery';
import airDatapicker from 'air-datepicker';

const formsDateDropdown = $('.form-date-dropdown');
Array.from(formsDateDropdown).map(formDateDropdown => $(formDateDropdown).datepicker({
  navTitles: {
    days: 'MM <i>yyyy</i>',
  },
  minDate: new Date(),
  range: true,
  multipleDatesSeparator: ' - ',
  onSelect: (fd, dates, inst) => {
    const selectDate = [];
    dates.forEach((date) => {
      console.log(1111)
      const day = date.getDate() > 10 ? date.getDate() : `0${date.getDate()}`;
      const month = date.getMonth() > 10 ? date.getMonth() : `0${date.getMonth() + 1}`;
      const year = date.getFullYear();
      selectDate.push(`${day}.${month}.${year}`);
      const field = formDateDropdown;
      const nextField = field.parentElement.parentElement.nextSibling.querySelector('.form-date-dropdown');
      console.log(nextField);
      if (nextField === null) {
        console.log(9999);
      }
      field.value = selectDate[0];
      nextField.value = selectDate[1] === undefined ? '' : selectDate[1];
    });
  },
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

      Array.from(formsDateDropdown).map(elem => elem.blur());
    });
  });
};

addApply();
