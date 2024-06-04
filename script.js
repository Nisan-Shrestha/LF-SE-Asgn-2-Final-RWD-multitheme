let toggle = document.getElementById("display-mode");
toggle.addEventListener("click", toggleLightMode);

function toggleLightMode() {
  if (toggle.checked) {
    console.log("light");
    document.documentElement.setAttribute('data-theme', 'light');
    document.body.classList.add("light-mode");
    document.getElementsByClassName("toggle__cover")[0].classList.add("toggle__cover--left");
  }else{
    console.log("dark");
    document.documentElement.setAttribute('data-theme', 'dark');
    document.body.classList.remove("light-mode");
    document.getElementsByClassName("toggle__cover")[0].classList.remove("toggle__cover--left");
  }
};
