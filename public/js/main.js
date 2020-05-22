/*jslint browser:true */

$(document).ready(function() {
  $("#navbar").load("navbar.html");
  $("#footer").load("../src/footer.html");
  changeSlide(1);
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

function changeSlide(slide)
{ 
  let first_button = document.getElementById('first-button');
  let second_button = document.getElementById('second-button');
  let third_button = document.getElementById('third-button');    

  console.log(first_button);



  let first_slide = document.getElementById('first-slide');
  let second_slide = document.getElementById('second-slide');
  let third_slide = document.getElementById('third-slide');  

  switch(slide)
  {
    case 1:
      console.log(first_button);      
      first_slide.classList.remove('hidden');
      second_slide.classList.add('hidden');
      third_slide.classList.add('hidden');
    break;
    case 2:
      first_slide.classList.add('hidden');
      second_slide.classList.remove('hidden');
      third_slide.classList.add('hidden');
    break;
    case 3:
      first_slide.classList.add('hidden');
      second_slide.classList.add('hidden');
      third_slide.classList.remove('hidden');          
    break;        
      
  }
}

