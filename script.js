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

// 流星动画部分
const canvas = document.getElementById("stars-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

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

function updateMeteors() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

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

updateMeteors();
