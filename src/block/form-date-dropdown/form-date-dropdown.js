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
      const day = date.getDate() > 10 ? date.getDate() : `0${date.getDate()}`;
      const month = date.getMonth() > 10 ? date.getMonth() : `0${date.getMonth() + 1}`;
      const year = date.getFullYear();
      selectDate.push(`${day}.${month}.${year}`);
      const field = formDateDropdown;
      const nextField = field.parentElement.nextSibling;
      const prevField = field.parentElement.previousSibling;

      if (nextField === null) {
        prevField.querySelector('.form-date-dropdown').value = selectDate[0];
        field.value = selectDate[1] === undefined ? '' : selectDate[1];
      } else {
        field.value = selectDate[0];
        nextField.querySelector('.form-date-dropdown').value = selectDate[1] === undefined ? '' : selectDate[1];
      }
    });
  },
  onShow: (inst, ac) => {
    const field = inst.el;
    if (field.parentElement.classList.contains('form-date-dropdown__right')) {
      console.log(inst.$datepicker[0].querySelector('.-apply-'));
      // inst.$datepicker[0].querySelector('.-apply-').addEventListener('click', () => {
      //   console.log(1111);
      //   inst.$datepicker[0].setAttribute('style', 'left: -100000px');
      // });
      field.parentElement.appendChild(inst.$datepicker[0]);
      inst.$datepicker[0].setAttribute('style', 'left: -170px; top: 75px');
      console.log('тут устанавливаеться позиция при появлении каллендаря');
    }
    // inst.$datepicker[0].removeAttribute('style');
  },
  onHide: (inst) => {
    inst.$datepicker[0].setAttribute('style', 'left: -100000px; top: 70px');
  },
  autoClose: true,
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
      console.log(111)

      currentDatapicker.setAttribute('style', 'left: -100000px');
      console.log(currentDatapicker);

      Array.from(formsDateDropdown).map(elem => elem.blur());
    });
  });
};

addApply();

const clear = (elem) => {
  elem.addEventListener('click', () => {
    Array.from(formsDateDropdown).map((formDateDropdown) => {
      const currentForm = formDateDropdown;
      currentForm.value = '';
      return true;
    });
  });
};

const clearValue = () => {
  const cleartBtn = $('[data-action = clear]');
  console.log(cleartBtn);
  Array.from(cleartBtn).map(elem => clear(elem));
};

clearValue();
