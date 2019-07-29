const showMenu = () => {
  
  const menuBtn = document.querySelector('.menu-icon');
  const menu = document.querySelector('.menu');
  const menuWrap = document.querySelector('.menu__wrap');
  const headerMenu = document.querySelector('.header__menu');

  menuBtn.addEventListener('click', () => {
    console.log(111)
    if (menu.classList.contains('menu--mobile')) {
      menu.classList.remove('menu--mobile');
      headerMenu.classList.remove('header__menu--mobile');
      menuWrap.classList.remove('menu__wrap--show');
      menuBtn.textContent = 'menu';
    } else {
      console.log(menuBtn);
      menuBtn.textContent = 'clear';
      menu.classList.add('menu--mobile');
      headerMenu.classList.add('header__menu--mobile');
      menuWrap.classList.add('menu__wrap--show');
    }
  });
};

showMenu();
