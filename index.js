//step 1
const mainEl = document.querySelector("main");

//step 2 - apply background color
mainEl.style.backgroundColor = "var(--main-bg)";

//step 3 - add h1
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

//step 4 - add flex class list
mainEl.setAttribute("class", "flex-ctr");

//===========Part 2=============
//name and assign a top menu var
const topMenuEl = document.getElementById("top-menu");
//Set the height of the topMenuEl element to be 100%
topMenuEl.style.height = "100%";
//Set the background color of topMenuEl
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
//set flex to topMenu
topMenuEl.setAttribute("class", "flex-around");

//===========Adding Menu Buttons==============
// Old menu data structure
// var menuLinks = [
//     { text: 'about', href: '/about' },
//     { text: 'catalog', href: '/catalog' },
//     { text: 'orders', href: '/orders' },
//     { text: 'account', href: '/account' },
// ];

//Updated Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

//adding the menuLink to the navBar
menuLinks.forEach((link) => {
  const a = document.createElement("a");
  a.setAttribute("href", link.href);
  a.textContent = link.text;
  topMenuEl.appendChild(a);
});

//========Part 3 - Adding interactivity===========
const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.setAttribute("class", "flex-around");

subMenuEl.style.position = "absolute";
subMenuEl.style.top = 0;

// Grabbing all topMenuEl <a> elements
const topMenuLinks = document.querySelectorAll("a");

//Add EventListener
topMenuEl.addEventListener("click", function (e) {
  e.preventDefault(); //The second line of code of the function should immediately return if the element clicked was not an <a> element.
  if (!e.target.matches("a")) {
    return;
  }

  console.log(e.target.textContent); //The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
  e.target.classList.toggle("active"); //The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.

  topMenuLinks.forEach((link) => {
    if (link !== e.target) {
      link.classList.remove("active");
    }
  }); //===Part 5 - Adding Submenu Interaction=== //Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked): //If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%. //Otherwise, set the CSS top property of subMenuEl to 0. //Hint: Caching the "link" object will come in handy for passing its subLinks array later.

  const clickedLink = menuLinks.find(
    (link) => link.text === e.target.textContent
  );
  if (e.target.classList.contains("active") && clickedLink.subLinks) {
    subMenuEl.style.top = "100%";
    buildSubMenu(clickedLink.subLinks);
  } else {
    if (!clickedLink.subLinks) {
      subMenuEl.style.top = 0;
    }
  }

  function buildSubMenu(subLinks) {
    //Clear the current contents of subMenuEl.
    subMenuEl.innerHTML = ""; //Iterate over the subLinks array, passed as an argument, and for each "link" object:
    subLinks.forEach((link) => {
      //Create an <a> element.
      const a = document.createElement("a"); //Add an href attribute to the <a>, with the value set by the href property of the "link" object.
      a.setAttribute("href", link.href); //Set the element's content to the value of the text property of the "link" object.
      a.textContent = link.text; //Append the new element to the subMenuEl.
      subMenuEl.appendChild(a);
    });
  } subMenuEl.addEventListener(`click`, function (e) {
    e.preventDefault();
    if (e.target.tagName !== `A`) return; //the target is a link
    console.log(e.target.textContent);
    subMenuEl.style.top = `0`; //move submenu to top
    topMenuLinks.forEach(link => link.classList.remove(`active`)); //remove "active class from menu"
    mainEl.innerHTML = `<h1>${e.target.textContent}</h1>`;
    if (e.target.textContent.toLowerCase() === `about`) {
      mainEl.innerHTML = `<h1>About</h1>`;
    }
  })
});
