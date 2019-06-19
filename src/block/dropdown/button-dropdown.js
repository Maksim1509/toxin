const button = document.querySelectorAll('.dropdown__header');

Array.from(button).map(btn => btn.addEventListener('click', () => {
  const drop = btn.nextSibling.querySelector('.dropdown__body');
  const plus = drop.querySelectorAll('.plus');
  const minus = drop.querySelectorAll('.minus');
  const values = drop.querySelectorAll('.dropdown__value');
  const accept = drop.querySelector('.dropdown__button--accept');
  const buttonClear = drop.querySelector('.dropdown__button--clear');
  const totalGuests = btn.querySelector('.dropdown__header-text');

  if (drop.classList.contains('dropdown__body--drop')) {
    drop.classList.remove('dropdown__body--drop');
  } else {
    drop.classList.add('dropdown__body--drop');
  }

  for (let i = 0; i < plus.length; i += 1) {
    plus[i].addEventListener('click', () => {
      buttonClear.classList.add('button--show');
      const value = plus[i].previousSibling;
      value.textContent = Number(value.textContent) + 1;
    });
  }

  for (let i = 0; i < minus.length; i += 1) {
    minus[i].addEventListener('click', () => {
      const value = minus[i].nextSibling;
      if (value.textContent !== '0') {
        value.textContent = Number(value.textContent) - 1;
      }
    });
  }

  accept.addEventListener('click', () => {
    let result = 0;
    for (let i = 0; i < values.length; i += 1) {
      const currentValue = Number(values[i].textContent);
      result += currentValue;
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
}));
