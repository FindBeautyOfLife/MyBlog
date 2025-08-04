const enterBtn = document.getElementById("enter-btn");
const cover = document.getElementById("cover");
const content = document.getElementById("content");

enterBtn.addEventListener("click", () => {
  cover.style.opacity = 0;
  setTimeout(() => {
    cover.style.display = "none";
    content.classList.add("visible");
  }, 1500); // 与 CSS 过渡时间一致
});
