const dragon = document.getElementById("dragon");
let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

document.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

gsap.ticker.add(() => {
  gsap.to(dragon, {
    x: mouse.x - 50,
    y: mouse.y - 50,
    duration: 0.2,
    ease: "power2.out"
  });
});
