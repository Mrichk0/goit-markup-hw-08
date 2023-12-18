const backdrop = document.querySelector("[data-backdrop]");
const openBtn = document.querySelector("[data-open-btn]");
const closeBtn = document.querySelector("[data-close-btn]");

openBtn.addEventListener("click", toggleBtn);
closeBtn.addEventListener("click", toggleBtn);

function toggleBtn() {
  backdrop.classList.toggle("visually-hidden");
  !backdrop.classList.contains("visually-hidden")
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = " visible");
}
