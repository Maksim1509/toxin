const button = document.querySelector('.dropdown__header');
const drop = document.querySelector('.dropdown__body');
const plus = drop.querySelectorAll('.plus');
const minus = drop.querySelectorAll('.minus');
const accept = document.querySelector('.dropdown__button--accept');
const buttonClear = document.querySelector('.dropdown__button--clear');

const values = drop.querySelectorAll('.dropdown__value');
const totalGuests = document.querySelector('.dropdown__header-text');

button.addEventListener('click', () => {
  if (drop.classList.contains('dropdown__body--drop')) {
    drop.classList.remove('dropdown__body--drop');
  } else {
    drop.classList.add('dropdown__body--drop');
  }
});


for (let i = 0; i < plus.length; i += 1) {
  plus[i].addEventListener('click', () => {
    buttonClear.classList.add('button--show');
    console.log(buttonClear);
    const value = plus[i].previousSibling;
    value.textContent = Number(value.textContent) + 1;
  });
}


for (let i = 0; i < minus.length; i += 1) {
  minus[i].addEventListener('click', () => {
    const value = minus[i].nextSibling;
    console.log(value);
    if (value.textContent !== '0') {
      value.textContent = Number(value.textContent) - 1;
      console.log(111);
    }
  });
}

accept.addEventListener('click', () => {
  let result = 0;
  for (let i = 0; i < values.length; i += 1) {
    const currentValue = Number(values[i].textContent);
    console.log(currentValue);
    result += currentValue;
    console.log(result);
  }
  if (result === 1) {
    totalGuests.textContent = `${result} гость`;
  } else {
    totalGuests.textContent = `${result} гостей`;
  }
  drop.classList.remove('dropdown__body--drop');
});

buttonClear.addEventListener('click', () => {
  for (let i = 0; i < values.length; i += 1) {
    values[i].textContent = 0;
  }
  totalGuests.textContent = 'Сколько гостей';
  buttonClear.classList.remove('button--show');
});
