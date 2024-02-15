
// Selecting necessary elements in HTML
const mainContent = document.querySelector(".main-content");
const showModalOnClick = document.querySelector(".book-now-button");
const hamburgerButton= document.querySelector('.hamburger-button')
const navbarLinks= document.querySelector('.navbar-links')

// Creating modal and its elements
const modal = document.createElement("div");
modal.className = "modal";

const modalbody = document.createElement("div");
modalbody.className = "modalbody";

const text = document.createElement("p");
text.innerText = "Hello world";

//Appending modal to the DOM
modalbody.appendChild(text);
modal.appendChild(modalbody);

// Showing modal when button is clicked
showModalOnClick.addEventListener("click", () => {
  mainContent.appendChild(modal);
});
// Handling modal close event
modal.addEventListener("click", (event) => {
  if (!event.target.closest(".modalbody")) {
    modal.remove();
  }
});

// Toggling navigation display on hamburger button click
hamburgerButton.addEventListener('click', () => {
  navbarLinks.style.display = navbarLinks.style.display === 'flex' ? 'none' : 'flex';
  hamburgerButton.innerHTML = navbarLinks.style.display === 'flex' ? '&#10006;': '&#9776;';
});
// Adjusting navigation display on window resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 800) {
    navbarLinks.style.display = 'flex';
    hamburgerButton.innerHTML = '&#9776;';
  } else if (window.innerWidth <= 800) {
    navbarLinks.style.display = 'none';
  }
});
