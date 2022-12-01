const toggleNightBtn = $(".toggle-night");
const toggleLightsBtn = $(".toggle-lights");
const lights = $(".lights");
const body = $("body");

toggleNightBtn.on("click", toggleDark);
toggleLightsBtn.on("click", toggleLights);

function toggleLights() {
  lights.toggleClass("active");

  if (lights.hasClass("active")) {
    toggleLightsBtn.text("Turn Off Lights");
  } else {
    toggleLightsBtn.text("Turn On Lights");
  }
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
