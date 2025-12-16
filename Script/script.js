// Part 1: --------------------------------------------------------------------------------------------------------------------------

const mainEl = document.querySelector('main');


mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

mainEl.classList.add('flex-ctr');
// Part 2: -----------------------------------------------------------------------------------------------------------------------

// Cache
const topMenuEl = document.querySelector('#top-menu');

// Height 
topMenuEl.style.height = '100%';

// Background color
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Flex
topMenuEl.classList.add('flex-around');

// Part 3: ------------------------------------------------------------------------------------------------------------------
