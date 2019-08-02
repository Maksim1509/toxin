const showFilter = () => {
    const filterIcon = document.querySelector('.search-room__icon-wrap');
    const filter = document.querySelector('.search-room__filter');

    filterIcon.addEventListener('click', () => {
      if (filter.classList.contains('search-room__icon--show')) {
        filter.classList.remove('search-room__icon--show')
      } else {
        filter.classList.add('search-room__icon--show')
      }
    })
}

showFilter();
