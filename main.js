window.addEventListener("load", () => {
  ready();
  document.querySelector("#toggler").addEventListener("click", () => {
    document.querySelector("#menu").classList.toggle("active_nav");
    document.querySelector("#effect").classList.toggle("active_effect");
    document.querySelector("#effect").addEventListener("click", () => {
      document.querySelector("#menu").classList.remove("active_nav");
      document.querySelector("#effect").classList.remove("active_effect");
    });
    document.addEventListener("keydown", (e) => {
      if (e.key == "Escape") {
        document.querySelector("#menu").classList.remove("active_nav");
        document.querySelector("#effect").classList.remove("active_effect");
      }
    });
  });
  document.addEventListener("keydown", (e) => {
    if (e.altKey && e.key == "m") {
      document.querySelector("#menu").classList.toggle("active_nav");
      document.querySelector("#effect").classList.toggle("active_effect");
    }
    document.addEventListener("keydown", (e) => {
      if (e.key == "Escape") {
        document.querySelector("#menu").classList.remove("active_nav");
        document.querySelector("#effect").classList.remove("active_effect");
      }
    });
    document.querySelector("#effect").addEventListener("click", () => {
      document.querySelector("#menu").classList.remove("active_nav");
      document.querySelector("#effect").classList.remove("active_effect");
    });
  });
});
function ready() {
  document.querySelector(".loaderContainer").style.display = "none";
}
