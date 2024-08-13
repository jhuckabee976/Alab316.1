// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];
menuLinks.forEach(link => {
    const a = document.createElement('a');
  })


//creating the main**
const mainE1 = document.querySelector('main');

mainE1.style.backgroundColor = 'var(--main-bg)';

mainE1.innerHTML = '<h1>DOM Manipulation</h1>';

mainE1.classList.add('flex-ctr');

//menu bar**

const topMenuE1 = document.getElementById('top-menu');

topMenuE1.style.height = '100%';

topMenuE1.style.backgroundColor = 'var(--top-menu-bg)';

topMenuE1.classList.add('flex-around');

