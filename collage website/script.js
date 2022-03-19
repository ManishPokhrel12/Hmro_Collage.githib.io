let menu = document.getElementById('menu');
let ul = document.getElementById('ul');
let close = document.getElementById('close');
menu.addEventListener("click", function(){
   ul.style.right = "-4%"
   close.addEventListener("click", function(){
   	ul.style.right = "-60%"
   })
})

