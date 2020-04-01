const menuConfig = {
  menuId: "#menu",
  menuClassClose: "menu--close",
  btnClass: ".logo__btn",
  btnClassClose: "logo__btn--close"
};


var counter = 0;
const mainMenu = document.querySelector(menuConfig.menuId);
const btnMenu = document.querySelector(menuConfig.btnClass);

if (mainMenu && btnMenu) {
  btnMenu.addEventListener("click", function(evt){
    mainMenu.classList.toggle(menuConfig.menuClassClose);
    btnMenu.classList.toggle(menuConfig.btnClassClose);
  });
}
