 const burger = document.getElementById('burger')
 const linkList = document.getElementById('link_list')

 function toggleMenu() {
     linkList.classList.toggle('link_list_visible')
     burger.classList.toggle('burger_in_x_form')
 }


 burger.addEventListener('click', toggleMenu)

// const dropdownButton = document.getElementById("dropdown-btn");
// const dropdownMenu = document.getElementById("dropdown-menu");

// dropdownButton.addEventListener("click", function() {
//   dropdownMenu.classList.toggle("show");
// });