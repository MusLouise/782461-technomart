var cartLink = document.querySelectorAll(".buy");

var cartPopup = document.querySelector(".modal-cart");
var cartClose = cartPopup.querySelector(".modal-close");
var cartOrder = cartPopup.querySelector(".order-placement");

for(var i=0; i<cartLink.length; i++){
  cartLink[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.add("modal-show");
    cartOrder.focus();
  })
}

/*  cartLink.forEach( function (item){
    item.addEventListener("click", function (evt) {
      evt.preventDefault();
      cartPopup.classList.add("modal-show");
      cartOrder.focus();
    })
  } ); */


cartClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (cartPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      cartPopup.classList.remove("modal-show");
    }
  }
});
