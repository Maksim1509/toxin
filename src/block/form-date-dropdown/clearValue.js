import $ from 'jquery';

const clear = (elem) => {
  elem.addEventListener('click', () => {
    const left = elem.parentElement.parentElement.parentElement.parentElement.querySelector('input');
    console.log(left);
    const right = left.parentElement.nextSibling.querySelector('input');
    left.value = '';
    right.value = '';
    return true;
  });
};

const clearValue = () => {
  const cleartBtn = $('[data-action = clear]');
  console.log(cleartBtn);
  Array.from(cleartBtn).map(elem => clear(elem));
};

export default clearValue;
