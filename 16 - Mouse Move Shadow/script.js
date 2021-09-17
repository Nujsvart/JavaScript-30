const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 200; // 200px

const shadow = function (e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(0,255,0,0.7),
    ${xWalk * -2}px ${yWalk}px 0 rgba(200,255,255,0.7),
    ${yWalk}px ${xWalk * -2}px 0 rgba(255,2,255,0.7),
    ${yWalk * -2}px ${xWalk}px 0 rgba(10,100,255,0.7)
    `;
};

hero.addEventListener("mousemove", shadow);
