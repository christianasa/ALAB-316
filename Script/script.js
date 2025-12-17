// Part 1: --------------------------------------------------------------------------------------------------------------------------
let mainEl = document.querySelector("main");

mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

mainEl.classList.add('flex-ctr');

//const mainEl = document.querySelector('main')
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

// 1.   Iterate over the entire menuLinks array and for each "link" object:
for (let link of menuLinks) {
  // 2.   Create an <a> element.
  let anchor = document.createElement("a");

  // 3.   On the new element, add an href attribute with its value set to the href property of the "link" object.
  anchor.setAttribute("href", link.href);

  // 4.   Set the new element's content to the value of the text property of the "link" object.
  anchor.textContent = link.text;

  // 5.   Append the new element to the topMenuEl element.
  topMenuEl.appendChild(anchor);
}
