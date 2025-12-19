// Part 1: --------------------------------------------------------------------------------------------------------------------------
let mainEl = document.querySelector("main");

mainEl.style.backgroundColor = 'var(--main-bg)';

mainEl.innerHTML = '<h1>DOM Manipulation</h1>';

mainEl.classList.add('flex-ctr');

//const mainEl = document.querySelector('main')

// Cache
const topMenuEl = document.querySelector('#top-menu');

// Height 
topMenuEl.style.height = '100%';

// Background color
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// Flex
topMenuEl.classList.add('flex-around');

// Part 2: ------------------------------------------------------------------------------------------------------------------

// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];


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

// Part 3:--------------------------------------------------------------------------------------------------------------------

// 1. Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.querySelector('#sub-menu');

// 2. Set the height subMenuEl element to be "100%".
subMenuEl.style.height = '100%';

// 3. Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

// 4. Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add('flex-around');

// 1. Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = 'absolute';

// 2. Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = '0';

// Part 4:--------------------------------------------------------------------------------------------------------------------

// 1. Select and cache all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = topMenuEl.querySelectorAll('a');

// 2. Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener('click', function(event) {
  // The first line of code of the event listener function should call the event object's preventDefault() method.
  event.preventDefault();
  
  // The second line of code of the function should immediately return if the element clicked was not an <a> element.
  if (event.target.tagName !== 'A') return;
  
  // Log the content of the <a> to verify the handler is working.
  console.log(event.target.textContent);
  
  // Cache whether the clicked link is currently active
  const isActive = event.target.classList.contains('active');
  
  // 2. The event listener should remove the active class from each other <a> element in topMenuLinks.
  topMenuLinks.forEach(function(link) {
    link.classList.remove('active');
  });
  
  // 1. The event listener should add the active class to the <a> element that was clicked, 
  // unless it was already active, in which case it should remove it.
  if (!isActive) {
    event.target.classList.add('active');
  }
  
  // Within the event listener, if the clicked element does not yet have a class of "active" (it was inactive when clicked):
  if (!isActive) {
    // Find the clicked link's corresponding object in menuLinks array
    const clickedLink = menuLinks.find(link => link.text === event.target.textContent);
    
    // 1. If the clicked <a> element's "link" object within menuLinks has a subLinks property, 
    // set the CSS top property of subMenuEl to 100%.
    if (clickedLink && clickedLink.subLinks) {
      subMenuEl.style.top = '100%';
      // Build the submenu with the subLinks array
      buildSubmenu(clickedLink.subLinks);
    } else {
      // 2. Otherwise, set the CSS top property of subMenuEl to 0.
      subMenuEl.style.top = '0';
      // 5. If the ABOUT link is clicked, an <h1>About</h1> should be displayed.
      mainEl.innerHTML = '<h1>About</h1>';
    }
  } else {
    // If the link was already active (now deactivated), hide the submenu
    subMenuEl.style.top = '0';
  }
});

// PART 5: ----------------------------------------------

// Helper function to build the submenu
function buildSubmenu(subLinks) {
  // 1. Clear the current contents of subMenuEl.
  subMenuEl.innerHTML = '';
  
  // 2. Iterate over the subLinks array, passed as an argument, and for each "link" object:
  subLinks.forEach(function(link) {
    // 1. Create an <a> element.
    const anchor = document.createElement('a');
    
    // 2. Add an href attribute to the <a>, with the value set by the href property of the "link" object.
    anchor.setAttribute('href', link.href);
    
    // 3. Set the element's content to the value of the text property of the "link" object.
    anchor.textContent = link.text;
    
    // 4. Append the new element to the subMenuEl.
    subMenuEl.appendChild(anchor);
  });
}

// 1. Attach a delegated 'click' event listener to subMenuEl.
subMenuEl.addEventListener('click', function(event) {
  // The first line of code of the event listener function should call the event object's preventDefault() method.
  event.preventDefault();
  
  // The second line of code within the function should immediately return if the element clicked was not an <a> element.
  if (event.target.tagName !== 'A') return;
  
  // Log the content of the <a> to verify the handler is working.
  console.log(event.target.textContent);
  
  // 2. Next, the event listener should set the CSS top property of subMenuEl to 0.
  subMenuEl.style.top = '0';
  
  // 3. Remove the active class from each <a> element in topMenuLinks.
  topMenuLinks.forEach(function(link) {
    link.classList.remove('active');
  });
  
  // 4. Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl.
  mainEl.innerHTML = '<h1>' + event.target.textContent + '</h1>';
});
