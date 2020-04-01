const menuConfig = {
  menuId: "#menu",
  menuClassActive: "menu--active",
  btnClass: ".logo__btn",
  btnClassClose: "logo__btn--close",
  mainNavClass: ".main-nav",
  mainNavClassActive: "main-nav--active"
};

var counter = 0;

const mainNav = document.querySelector(menuConfig.mainNavClass);
const mainMenu = mainNav.querySelector(menuConfig.menuId);
const btnMenu = mainNav.querySelector(menuConfig.btnClass);

if (mainMenu && btnMenu) {
  btnMenu.addEventListener("click", function(evt){
    mainMenu.classList.toggle(menuConfig.menuClassActive);
    btnMenu.classList.toggle(menuConfig.btnClassClose);
    mainNav.classList.toggle(menuConfig.mainNavClassActive);
  });
}
