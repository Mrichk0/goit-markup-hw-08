const menuBtn = document.querySelector("[data-menu-button");
const mobileMenu = document.querySelector("[data-menu]");

menuBtn.addEventListener("click", toggleBtn);

function toggleBtn() {
  const expanded = menuBtn.getAttribute("aria-expanded") === "true" || false;
  menuBtn.classList.toggle("is-open");
  menuBtn.setAttribute("aria-expanded", !expanded);
  mobileMenu.classList.toggle("is-open");
  // if (!expanded) {
  //   document.body.style.overflow = "hidden";
  // }

  !expanded
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = " visible");
}
