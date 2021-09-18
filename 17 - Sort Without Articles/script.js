const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

const bandEl = document.querySelector("#bands");

const regEx = /^(an?|the)\s+?/i;

const strip = bandName => bandName.replace(regEx, "").trim();

const sortedBands = bands.sort((a, b) => strip(a) > strip(b));

bandEl.insertAdjacentHTML(
  "beforeend",
  sortedBands.map(band => `<li>${band}</li>`).join("")
);

/* bandEl.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join("") */
