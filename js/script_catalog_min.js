for(var cartLink=document.querySelectorAll(".buy"),cartPopup=document.querySelector(".modal-cart"),cartClose=cartPopup.querySelector(".modal-close"),cartOrder=cartPopup.querySelector(".order-placement"),i=0;i<cartLink.length;i++)cartLink[i].addEventListener("click",function(e){e.preventDefault(),cartPopup.classList.add("modal-show"),cartOrder.focus()});cartClose.addEventListener("click",function(e){e.preventDefault(),cartPopup.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&cartPopup.classList.contains("modal-show")&&(e.preventDefault(),cartPopup.classList.remove("modal-show"))});