const enterBtn = document.getElementById("enter-btn");
const cover = document.getElementById("cover");
const content = document.getElementById("content");

// 封面淡出逻辑
enterBtn.addEventListener("click", () => {
  cover.style.opacity = 0;
  setTimeout(() => {
    cover.style.display = "none";
    content.classList.add("visible");
  }, 1500);
});

// 获取 canvas 和上下文
const canvas = document.getElementById("stars-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 繁星数组
let stars = [];
for (let i = 0; i < 120; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.3 + 0.5,
    d: Math.random() * 0.5 + 0.2
  });
}

// 流星数组
let meteors = [];

function createMeteor() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * -canvas.height,
    speed: 4 + Math.random() * 4,
    length: 80 + Math.random() * 100,
    opacity: Math.random() * 0.5 + 0.5
  };
}

function drawMeteor(meteor) {
  ctx.beginPath();
  ctx.moveTo(meteor.x, meteor.y);
  ctx.lineTo(meteor.x - meteor.length, meteor.y + meteor.length);
  ctx.strokeStyle = `rgba(255,255,255,${meteor.opacity})`;
  ctx.lineWidth = 2;
  ctx.stroke();
}

function drawStars() {
  for (let i = 0; i < stars.length; i++) {
    let s = stars[i];
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2, false);
    ctx.fillStyle = "white";
    ctx.globalAlpha = Math.random() * 0.8 + 0.2; // 闪烁感
    ctx.fill();
  }
  ctx.globalAlpha = 1; // 恢复正常透明度
}

function updateMeteors() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawStars();

  meteors.forEach((meteor, index) => {
    meteor.x += -meteor.speed;
    meteor.y += meteor.speed;

    drawMeteor(meteor);

    if (meteor.y > canvas.height) {
      meteors.splice(index, 1);
    }
  });

  if (Math.random() < 0.02) {
    meteors.push(createMeteor());
  }

  requestAnimationFrame(updateMeteors);
}

// 自适应尺寸
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

updateMeteors();
