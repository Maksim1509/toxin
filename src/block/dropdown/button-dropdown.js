const showDropdown = () => {
  const dp = document.querySelectorAll('.dropdown__header');

  Array.from(dp).map(el => el.addEventListener('click', () => {
    const drop = el.nextSibling;
    console.log(drop);
    if (drop.classList.contains('dropdown__body--drop')) {
      drop.classList.remove('dropdown__body--drop');
    } else {
      drop.classList.add('dropdown__body--drop');
    }
  }));
};

const addition = () => {
  const plus = document.querySelectorAll('.plus');
  Array.from(plus).map(el => el.addEventListener('click', (e) => {
    const a = e.target;
    const value = a.previousSibling;
    value.textContent = Number(value.textContent) + 1;
    const btnClear = a.parentNode.parentNode.parentNode.querySelector('.dropdown__button--clear');
    btnClear.classList.add('button--show');
  }));
};

const subtract = () => {
  const minus = document.querySelectorAll('.minus');
  Array.from(minus).map(el => el.addEventListener('click', (e) => {
    const a = e.target;
    const value = a.nextSibling;
    if (value.textContent !== '0') {
      value.textContent = Number(value.textContent) - 1;
    }
  }));
};

const  aplly = () => {
  const accept = document.querySelectorAll('.dropdown__button--accept');
  Array.from(accept).map(el => el.addEventListener('click', (e) => {
    const values = e.target.parentNode.parentNode.querySelectorAll('.dropdown__value');
    const result = Array.from(values).reduce((acc, val) => Number(val.textContent) + acc, 0);

    const totalGuests = e.target.parentNode.parentNode.previousSibling.querySelector('span');
    if (result === 1) {
      totalGuests.textContent = `${result} гость`;
    } else {
      totalGuests.textContent = `${result} гостей`;
    }
    e.target.parentNode.parentNode.classList.remove('dropdown__body--drop');
  }));
};

const clear = () => {
  const btnClear = document.querySelectorAll('.dropdown__button--clear');

  Array.from(btnClear).map(el => el.addEventListener('click', (e) => {
    const totalGuests = e.target.parentNode.parentNode.previousSibling.querySelector('span');
    totalGuests.textContent = 'Сколько гостей';

    const values = e.target.parentNode.parentNode.querySelectorAll('.dropdown__value');
    Array.from(values).map(val => val.textContent = 0);
  }));
};

showDropdown();
addition();
subtract();
aplly();
clear();
