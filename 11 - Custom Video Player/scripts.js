const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");
const toggle = document.querySelector(".toggle");
const skipButtons = document.querySelectorAll("[data-skip]");
const ranges = document.querySelectorAll(".player__slider");
const fullscreen = document.querySelector(".fullsc");

// Event handlers

const togglePlay = function () {
  video.paused ? video.play() : video.pause();
};

const updateButton = function () {
  const icon = this.paused ? "▶" : "⏸";
  toggle.textContent = icon;
};

const skip = function () {
  //console.log(this.dataset.skip)
  video.currentTime += parseFloat(this.dataset.skip);
};

const handleRangeUpdate = function () {
  video[this.name] = this.value;
};

const handleProgress = function () {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
};

const scrub = function (e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
};

const goFullscreen = function () {
  video.requestFullscreen();
};

// Event Listeners
toggle.addEventListener("click", togglePlay);

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

skipButtons.forEach(button => button.addEventListener("click", skip));

ranges.forEach(slide => slide.addEventListener("input", handleRangeUpdate));

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", e => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));

fullscreen.addEventListener("click", goFullscreen);
