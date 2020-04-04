const menuConfig = {
  menu: {
    id: "#menu",
    name: {
      active: "menu--active"
    }
  },
  container: {
    class: {
      item: ".main-nav"
    },
    name: {
      active: "main-nav--active"
    }
  },
  btn: {
    class: {
      item: ".logo__btn"
    },
    name: {
      close: "logo__btn--close"
    }
  }
};


const menuNav = document.querySelector(menuConfig.container.class.item);
const menuContainer = menuNav.querySelector(menuConfig.menu.id);
const menuBtn = menuNav.querySelector(menuConfig.btn.class.item);

if (menuContainer && menuBtn) {
  menuBtn.addEventListener("click", function(evt){
    menuContainer.classList.toggle(menuConfig.menu.name.active);
    menuBtn.classList.toggle(menuConfig.btn.name.close);
    menuNav.classList.toggle(menuConfig.container.name.active);
  });
}


const sliderConfig = {
  slider: {
    id: "#slider"
  },
  slide: {
    class: {
      item: ".slider__item",
      active: ".slider__item--active"
    },
    name: {
      active: "slider__item--active"
    }
  },
  controls: {
    class: {
      item: ".slider__controls"
    }
  },
  btn: {
    class: {
      active: ".slider__toogle--active"
    },
    name: {
      active: "slider__toogle--active"
    }
  },
  sliderItem: "slider__item",
  sliderItemActive: "slider__item--active",
  sliderControls: "slider__controls",
  sliderToggleActicve: "slider__toogle--active"
};

let sliderIndex = {
  next: 0,
  current: 0
};

const slider = document.querySelector(sliderConfig.slider.id);

//Toogle element state or remove from old and add to new
function toggleElementsState(elementOld, elementNew, elementClass) {
  elementOld.classList.remove(elementClass);
  elementOld.offsetWidth = elementOld.offsetWidth;
  elementNew.classList.add(elementClass);
}

if (slider) {
  const sliderList = slider.querySelectorAll(sliderConfig.slide.class.item);
  const sliderController = slider.querySelector(sliderConfig.controls.class.item);
  const sliderToggles = Array.prototype.slice.call(sliderController.children);

   //Toggle slide
  function nextSlide(sliderList, sliderToggles, sliderIndex) {
    toggleElementsState(sliderList[sliderIndex.current], sliderList[sliderIndex.next], sliderConfig.slide.name.active);
    toggleElementsState(sliderToggles[sliderIndex.current], sliderToggles[sliderIndex.next], sliderConfig.btn.name.active);
  };

  sliderController.addEventListener("click", function (evt) {
    const sliderToggleActive = slider.querySelector(sliderConfig.btn.class.active);
    sliderIndex.current = sliderToggles.indexOf(sliderToggleActive);
    sliderIndex.next = sliderToggles.indexOf(evt.target);
    nextSlide(sliderList, sliderToggles, sliderIndex);
  });
}

const pricesConfig = {
  container: {
    id: "#prices"
  },
  controls: {
    class: {
      item: ".prices__control"
    }
  },
  tariffs: {
    class: {
      item: ".prices__tariffs"
    },
    name: {
      list: ["prices__tariffs--base", "prices__tariffs--standart", "prices__tariffs--unlim"]
    }
  } ,
  btn: {
    name: {
      active: "prices__toogle--active"
    },
    class: {
      active: ".prices__toogle--active"
    }
  }
};

let pricesIndex = {
  next: 0,
  current: 0
};

const pricesContainer = document.querySelector(pricesConfig.container.id);
const pricesTariffs = pricesContainer.querySelector(pricesConfig.tariffs.class.item);
const pricesController = pricesContainer.querySelector(pricesConfig.controls.class.item);
const pricesToggles = Array.prototype.slice.call(pricesController.children);

if (pricesContainer) {
  pricesController.addEventListener("click", function(evt) {
    const pricesToggleActive = pricesController.querySelector(pricesConfig.btn.class.active);
    pricesIndex.current = pricesToggles.indexOf(pricesToggleActive);
    pricesIndex.next = pricesToggles.indexOf(evt.target);
    pricesTariffs.classList.remove(pricesConfig.tariffs.name.list[pricesIndex.current]);
    pricesTariffs.classList.add(pricesConfig.tariffs.name.list[pricesIndex.next]);
    toggleElementsState(pricesToggles[pricesIndex.current], pricesToggles[pricesIndex.next], pricesConfig.btn.name.active);
  });
}
