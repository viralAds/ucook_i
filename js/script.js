function Ready() {
  document.getElementById("open-window").style.visibility = 'hidden';


  var icon = document.getElementById("icon");
  icon.addEventListener("click", closeWindow);

  var prod = document.getElementById("open-window");
  prod.style.display = "flex";

  var arrow = document.getElementById("arrow");
  arrow.addEventListener("click", openWindow);
}

function closeWindow() {
  var prodWindow = document.getElementById("product-window");
  prodWindow.style.display = "none";
  document.getElementById("open-window").style.visibility = 'visible';
}

function openWindow() {
  var prodWindow = document.getElementById("product-window");
  prodWindow.style.display = "flex";
  var prod = document.getElementById("open-window").style.visibility = 'hidden';
}
