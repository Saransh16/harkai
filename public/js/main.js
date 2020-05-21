let show_list = false;
let hide_mobile_menu = true;


function showProducts()
{
  show_list = !show_list;

  let product_list = document.getElementById('products-display').classList;  

  if(show_list) product_list.remove('hidden');    

  else product_list.add('hidden');    
}

function hideMenu()
{
  hide_mobile_menu = !hide_mobile_menu;

  let mobile_menu = document.getElementById('mobile-menu').classList;  

  if(show_list) mobile_menu.remove('hidden');    

  else mobile_menu.add('hidden');      
}

function showMenu()
{
  let mobile_menu = document.getElementById('mobile-menu').classList;  

  mobile_menu.remove('hidden');        
}