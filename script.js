var link = document.querySelector(".letter-link");

var popup = document.querySelector(".write-us");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var messageFrom = popup.querySelector("[name=name]");
var eMail = popup.querySelector("[name=e-mail]");
var text = popup.querySelector("[name=message-text]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("messageFrom");
  storage = localStorage.getItem("eMail");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    messageFrom.value = storage;
    eMail.value = storage;
    text.focus();
  }else {
    messageFrom.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!messageFrom.value || !eMail.value || !text.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");}
  else {
    if (isStorageSupport) {
      localStorage.setItem("messageFrom", messageFrom.value);
      localStorage.setItem("eMail", eMail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

var mapLink = document.querySelector(".map");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});

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
