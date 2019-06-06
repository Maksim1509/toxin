const roomsFilter = document.querySelector('.rooms-filter');

const showBody = () => {
  const body = document.querySelector('.rooms-filter__body');
  const show = 'rooms-filter--show';
  roomsFilter.addEventListener('click', () => {
    if (body.classList.contains(show)) {
      body.classList.remove(show);
      roomsFilter.style.borderColor = 'rgba(31, 32, 65, 0.25)';
    } else {
      body.classList.add(show);
      roomsFilter.style.borderColor = 'rgba(31, 32, 65, 0.5)';
    }
  });
};

showBody();

const conjugationBadroom = [
  'спален',
  'спальня',
  'спальни',
  'спальни',
  'спальни',
];
const conjugationBad = [
  'кроватей',
  'кровать',
  'кровати',
  'кровати',
  'кровати',
];

const selectFilter = () => {
  const btn = document.querySelectorAll('.rooms-filter__select-button');

  Array.from(btn).map(elem => elem.addEventListener('click', () => {
    const valueNode = elem.nextSibling ? elem.nextSibling : elem.previousSibling;
    const currentValue = valueNode.textContent;

    const badRoomCount = document.getElementById('bad-room');
    const badCount = document.getElementById('bad');

    const parent = elem.parentNode;
    const type = parent.previousSibling.textContent;

    if (elem.nextSibling) {
      const newValue = currentValue === '0' ? 0 : Number(currentValue) - 1;
      valueNode.textContent = newValue;
      if (type === 'спальни') {
        badRoomCount.textContent = conjugationBadroom[newValue] ? `${newValue}
          ${conjugationBadroom[newValue]},` : `${newValue} спален,`;
      } else if (type === 'кровати') {
        badCount.textContent = conjugationBad[newValue] ? `${newValue}
        ${conjugationBad[newValue]}...` : `${newValue} кроватей...`;
      }
    } else {
      const newValue = Number(currentValue) + 1;
      valueNode.textContent = newValue;
      if (type === 'спальни') {
        badRoomCount.textContent = conjugationBadroom[newValue] ? `${newValue}
          ${conjugationBadroom[newValue]},` : `${newValue} спален,`;
      } else if (type === 'кровати') {
        badCount.textContent = conjugationBad[newValue] ? `${newValue}
        ${conjugationBad[newValue]}...` : `${newValue} кроватей...`;
      }
    }
  }));
};

selectFilter();
