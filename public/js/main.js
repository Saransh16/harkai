window.onload = function() {
  $("#covid-news").load("../src/covid-news.html");  
  $("#navbar").load("navbar.html");
  $("#footer").load("../src/footer.html");
  $("#carousel").load("../src/carousel.html");  
  $("#testimonials").load("../src/testimonial.html");
  showProductAlert();
  getCurrentPage();
};

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

function showProductAlert()
{
  console.log("hello");
  // setInterval(() => {

  //   let product_alert = document.getElementById("new-product-alert");

  //   product_alert.classList.remove("hidden");    
    
  // }, 20000);
}

function closeProductAlert()
{
  let product_alert = document.getElementById("new-product-alert");

  product_alert.classList.add("hidden");  
}

function getCurrentPage()
{
  let page_url = location.pathname.split("/").slice(-1)
  let page = page_url[0].split('.')[0];
  page = String(page);

  if(page == "contact") return true;

  if(page == "decontamination" || page == "sensors")
  {
    page = "product";
  }

  setTimeout(() => {

    let nav_item = document.getElementById(page);
    nav_item.classList.add('text-gray-800');
    nav_item.classList.add('border-b-2');
    nav_item.classList.add('border-blue-300');    
    
  }, 1000);

}