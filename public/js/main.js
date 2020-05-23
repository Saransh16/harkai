$(document).ready(function() {
  $("#navbar").load("navbar.html");
  $("#footer").load("../src/footer.html");
  $("#carousel").load("../src/carousel.html");  
});

let show_list = false;
let hide_mobile_menu = true;


function showProducts()
{
  show_list = !show_list;

  let product_list = document.getElementById("products-display");

  if(show_list)
  {
    product_list.classList.remove("hidden");
  } 
  else
  {
    product_list.classList.add("hidden");
  }
}

function hideMenu()
{
  hide_mobile_menu = !hide_mobile_menu;

  let mobile_menu = document.getElementById("mobile-menu");
  
  if(show_list)
  {
    mobile_menu.classList.remove("hidden");
  } 
  else
  {
    mobile_menu.classList.add("hidden");
  }
}

function showMenu()
{
  let mobile_menu = document.getElementById("mobile-menu");  

  mobile_menu.classList.remove("hidden");        
}