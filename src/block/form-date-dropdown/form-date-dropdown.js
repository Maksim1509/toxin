import $ from 'jquery';
import airDatapicker from 'air-datepicker';
import clearValue from './clearValue';
import addApply from './addApply';

const wrap = $('.form-date-dropdown__container');
console.log(wrap);
const wrap1 = document.querySelectorAll('.form-date-dropdown__container');

Array.from(wrap).map(el => $(el).datepicker({ // инициализация air-datepicker
  navTitles: {
    days: 'MM <i>yyyy</i>',
  },
  minDate: new Date(),
  range: true,
  onSelect: (fd, dates, inst) => {
    const selectDate = [];
    dates.forEach((date) => {
      const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
      const month = date.getMonth() > 9 ? date.getMonth() : `0${date.getMonth() + 1}`;
      const year = date.getFullYear();
      selectDate.push(`${day}.${month}.${year}`);
      const field = el;
      const leftField = field.querySelector('input');
      const rightField = leftField.parentElement.nextSibling.querySelector('input');
      leftField.value = selectDate[0];
      rightField.value = selectDate[1] === undefined ? '' : selectDate[1];
    });
  },
  prevHtml: '<i class="material-icons">arrow_back</i>',
  nextHtml: '<i class="material-icons">arrow_forward</i>',
  clearButton: true,
}));

Array.from(wrap1).map(el => el.addEventListener('click', (e) => { // отображение календаря
  if (e.target.tagName === 'INPUT') {
    const dp = el.querySelector('.datepicker-inline');
    dp.style.display = 'block';
  }
}));

clearValue();
addApply();
