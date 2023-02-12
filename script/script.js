const navList = document.querySelector(".navList");
const bar = document.querySelector(".icon-bar");
const closeIcon = document.querySelector(".icon-close");

bar.addEventListener("click", () => {
  navList.classList.toggle("open");
});
closeIcon.addEventListener("click", () => {
  navList.classList.toggle("open");
});
