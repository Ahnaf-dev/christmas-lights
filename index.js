const toggleNightBtn = $(".toggle-night");
const body = $("body");

toggleNightBtn.on("click", toggleDark);

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
