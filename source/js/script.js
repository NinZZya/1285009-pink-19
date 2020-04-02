const menuConfig = {
  menuId: "#menu",
  menuClassActive: "menu--active",
  btnClass: ".logo__btn",
  btnClassClose: "logo__btn--close",
  mainNavClass: ".main-nav",
  mainNavClassActive: "main-nav--active"
};

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


const sliderConfig = {
  slider: "slider",
  sliderItem: "slider__item",
  sliderItemActive: "slider__item--active",
  sliderControls: "slider__controls",
  sliderToggleActicve: "slider__toogle--active"
};

let sliderIndex = {
  next: 0,
  current: 0
};

const slider = document.querySelector("#" + sliderConfig.slider);
if (slider) {
  const sliderList = slider.querySelectorAll("." + sliderConfig.sliderItem);
  const sliderController = slider.querySelector("." + sliderConfig.sliderControls);
  const sliderToggles = Array.prototype.slice.call(sliderController.children);

  console.log("sliderIndex.current = " + sliderIndex.current);

  //Переключение тоглов
  function nextSlide(sliderList, sliderToggles, sliderIndex) {
    sliderList[sliderIndex.current].classList.remove(sliderConfig.sliderItemActive);
    sliderToggles[sliderIndex.current].classList.remove(sliderConfig.sliderToggleActicve);
    sliderList[sliderIndex.next].classList.add(sliderConfig.sliderItemActive);
    sliderToggles[sliderIndex.next].classList.add(sliderConfig.sliderToggleActicve);
  };
  sliderController.addEventListener("click", function (evt) {
    const sliderToggleActive = slider.querySelector("." + sliderConfig.sliderToggleActicve);
    sliderIndex.current = sliderToggles.indexOf(sliderToggleActive);
    sliderIndex.next = sliderToggles.indexOf(evt.target);
    console.log("sliderIndex.next = " + sliderIndex.next);
    nextSlide(sliderList, sliderToggles, sliderIndex);
  });
}
