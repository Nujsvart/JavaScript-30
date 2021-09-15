const item = document.querySelectorAll(".item");
const inputs = document.querySelectorAll("input");
const inbox = document.querySelector(".inbox");

/* item.forEach(item => console.log(item));
input.forEach(input => console.log(input)); */

let lastChecked;

function handleCheck(e) {
  let inBetween = false;

  if (e.target.checked && e.shiftKey) {
    inputs.forEach(input => {
      console.log(input);
      if (input === e.target || input === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) input.checked = true;
    });
  }

  lastChecked = e.target;
}

inputs.forEach(input => input.addEventListener("click", handleCheck));
