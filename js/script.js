// Hämtar id för "burger" och "link_list"
const burger = document.getElementById('burger');
const linkList = document.getElementById('link_list');

// Funktion för att ändra burgermenyn
function toggleMenu() {
  linkList.classList.toggle('link_list_visible');
  burger.classList.toggle('burger_in_x_form');
}

// Kollar om man klickar för att aktivera koden
burger.addEventListener('click', toggleMenu);

// // Scrollhändelse


// window.addEventListener('scroll', function() {

//   var textElement = document.querySelector('.scroll-effect');
//   var elementOffset = textElement.offsetTop; // Offset för textelementet från toppen
//   var windowHeight = window.innerHeight; // Fönstrets höjd
//   var scrollPosition = window.scrollY; // Nuvarande scroll-position

//   if (scrollPosition > elementOffset - windowHeight + 20) {
//     textElement.classList.add('move-up'); // Lägg till move-up-klassen för att tillämpa scroll-effekten
//   } else {
//     textElement.classList.remove('move-up'); // Ta bort move-up-klassen om inte tillräckligt mycket har scrollats
//   }
// });
