const toggleNightBtn = $(".toggle-night");
const toggleLightsBtn = $(".toggle-lights");
const lights = $(".lights");
const body = $("body");
const detectSpeed = $(".speed-control");
const detectIntensity = $(".change__intensity input");

toggleNightBtn.on("click", toggleDark);
toggleLightsBtn.on("click", toggleLights);
detectSpeed.on("change", changeSpeed);
detectIntensity.on("change", changeIntensity);

// toggle light functionality
function toggleLights(normal = true) {
  lights.toggleClass("active");

  if (lights.hasClass("active")) {
    toggleLightsBtn.text("Turn Off Lights");

    if (normal) {
      addToAnimationDuration(0.5);
    }
  } else {
    toggleLightsBtn.text("Turn On Lights");
  }
}

// control animation duration
function addToAnimationDuration(seconds) {
  $(".lights__circle:nth-of-type(2n)").each(function (i, value) {
    value.style.animationDuration = 1 + seconds + "s";
  });
  $(".lights__circle:nth-of-type(2n + 1)").each(function (i, value) {
    value.style.animationDuration = 1.5 + seconds + "s";
  });

  $(".lights__circle:nth-of-type(3n + 1)").each(function (i, value) {
    value.style.animationDuration = 2 + seconds + "s";
  });
}

function changeSpeed() {
  const value = detectSpeed.val();
  addToAnimationDuration(Number(value));
}

// change intensity

function changeIntensity() {
  const value = Number(detectIntensity.val());
  $(":root").css("--intensity", `${15 + value}px`);
}

// dark mode functionality

function toggleDark() {
  body.toggleClass("dark");

  if (body.hasClass("dark")) {
    setButtonToMorningState();
  } else {
    setButtonToNightState();
  }
}

function setButtonToMorningState() {
  toggleNightBtn.css({ color: "white", backgroundColor: "black" });
  toggleNightBtn.html(`<span class="material-icons">
  light_mode</span>Morning`);
}
function setButtonToNightState() {
  toggleNightBtn.css({ color: "black", backgroundColor: "white" });
  toggleNightBtn.html(`<span class="material-icons">
  dark_mode</span>Night`);
}
