
const enterBtn = document.getElementById("enter-btn");
const cover = document.getElementById("cover");
const content = document.getElementById("content");
const viewCountElement = document.getElementById("view-count");

// 获取已有浏览量（从 localStorage）
let viewCount = localStorage.getItem("viewCount");
if (!viewCount) {
  viewCount = 0;
}
viewCountElement.textContent = `浏览量：${viewCount} 次`;

enterBtn.addEventListener("click", () => {
  // 增加浏览量并保存
  viewCount++;
  localStorage.setItem("viewCount", viewCount);

  // 隐藏封面，显示正文
  cover.style.opacity = 0;
  setTimeout(() => {
    cover.style.display = "none";
    content.classList.add("visible");
  }, 1500);
});
