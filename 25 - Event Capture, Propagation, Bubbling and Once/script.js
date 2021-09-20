const divs = document.querySelectorAll("div");
const button = document.querySelector("button");

function logText(e) {
  e.stopPropagation(); // stop bubbling!
  console.log(this.classList.value);
  //console.log(this)
}

divs.forEach(div => div.addEventListener("click", logText));

button.addEventListener(
  "click",
  () => {
    console.log("Click!!!");
  },
  {
    once: true, // removeEventListener (1 kez calistiktan sonra sil)
  }
);
