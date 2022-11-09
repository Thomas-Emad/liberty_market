// Button Menu menu_button()
let status_menu = false;
function menu_button() {
  if (status_menu == false) {
    document.getElementsByClassName("menu_icon")[0].style.background = "#eee";
    document.getElementsByClassName("menu")[0].style.transform =
      "translateY(0)";
    status_menu = true;
  } else if (status_menu == true) {
    document.getElementsByClassName("menu")[0].style.transform =
      "translateY(-200%)";
    status_menu = false;
  }
}
