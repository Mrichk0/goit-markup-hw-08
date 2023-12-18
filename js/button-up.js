let button = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

button.addEventListener("click", topFunction);

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
