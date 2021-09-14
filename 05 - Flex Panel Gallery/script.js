const panels = document.querySelectorAll(".panel");

function toggleOpen() {
    panels.forEach(panel => panel.classList.remove("open"));
    this.classList.toggle("open");
};

function toggleActive(e) {
  if (e.propertyName.includes("flex")) e.target.classList.toggle("open-active");
};

panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));
