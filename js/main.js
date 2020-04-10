const cartButton = document.querySelector("#card-button");
const modal = document.querySelector(".modal")
const close = document.querySelector(".close")

cartButton.addEventListener("click", function (event) {
  //alert("hi");
  modal.classList.add("is-open");
});

close.addEventListener("click", function(event) {
  modal.classList.remove("is-open");
});

function toggoModal() {
  modal.classList.toggle("is-open");
}

new WOW().init();