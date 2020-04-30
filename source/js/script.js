const menuConfig = {
  container: {
    class: {
      item: ".logo"
    },
    name: {
      active: "logo--active"
    }
  },
  item: {
    id: "#menu",
    name: {
      active: "menu--active"
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

let sliderConfig = {
  container: {
    id: "#slider"
  },
  item: {
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
  index: {
    current: 0,
    next: 0
  }
};

const pricesConfig = {
  container: {
    id: "#prices"
  },
  item: {
    class: {
      item: ".prices__tariffs"
    },
    name: {
      list: ["prices__tariffs--base", "prices__tariffs--standart", "prices__tariffs--unlim"],
      active: "prices__tariffs--standart"
    }
  },
  controls: {
    class: {
      item: ".prices__control"
    }
  },
  btn: {
    class: {
      active: ".prices__toogle--active"
    },
    name: {
      active: "prices__toogle--active"
    }
  },
  index: {
    current: 0,
    next: 0
  }
};

let applicationConfig = {
  container: {
    id: "#application-controls"
  },
  item: {
    class: {
      item: ".application__ranges-item",
      active: ".application__ranges-item--active"
    },
    name: {
      active: "application__ranges-item--active"
    }
  },
  controls: {
    class: {
      item: ".application__buttons-list"
    }
  },
  btn: {
    class: {
      active: ".application__button--active"
    },
    name: {
      active: "application__button--active"
    }
  },
  index: {
    current: 0,
    next: 0
  }
};

const menuContainer = document.querySelector(menuConfig.container.class.item);
const menuItem = document.querySelector(menuConfig.item.id);
const menuBtn = menuContainer.querySelector(menuConfig.btn.class.item);

if (menuItem && menuBtn) {
  window.onload = function(){
    menuContainer.classList.remove(menuConfig.container.name.active);
    menuItem.classList.remove(menuConfig.item.name.active);
    menuBtn.classList.remove(menuConfig.btn.name.close);
  };
  menuBtn.addEventListener("click", function (evt) {
    menuContainer.classList.toggle(menuConfig.container.name.active);
    menuItem.classList.toggle(menuConfig.item.name.active);
    menuBtn.classList.toggle(menuConfig.btn.name.close);
  });
}

// //Toogle element state or remove from old and add to new
function toggleElementsState(elementOld, elementNew, elementClass) {
  elementOld.classList.remove(elementClass);
  elementOld.offsetWidth = elementOld.offsetWidth;
  elementNew.classList.add(elementClass);
}

function toggleElement(elementContainer, elementConfig) {
  const elementList = elementContainer.querySelectorAll(elementConfig.item.class.item);
  const elementController = elementContainer.querySelector(elementConfig.controls.class.item);
  const elementToggles = Array.prototype.slice.call(elementController.children);
  elementController.addEventListener("click", function (evt) {
    elementConfig.index.next = elementToggles.indexOf(evt.target);
    if (elementConfig.index.next != -1) {
      const elementToggleActive = elementContainer.querySelector(elementConfig.btn.class.active);
      elementConfig.index.current = elementToggles.indexOf(elementToggleActive);
      toggleElementsState(elementList[elementConfig.index.current], elementList[elementConfig.index.next], elementConfig.item.name.active);
      toggleElementsState(elementToggles[elementConfig.index.current], elementToggles[elementConfig.index.next], elementConfig.btn.name.active);
    }
  });
}

function swipeElement(elementContainer, elementConfig) {
  const elementItem = elementContainer.querySelector(elementConfig.item.class.item);
  const elementController = elementContainer.querySelector(elementConfig.controls.class.item);
  const elementToggles = Array.prototype.slice.call(elementController.children);
  elementController.addEventListener("click", function (evt) {
    elementConfig.index.next = elementToggles.indexOf(evt.target);
    if (elementConfig.index.next != -1) {
      const elementToggleActive = elementContainer.querySelector(elementConfig.btn.class.active);
      elementConfig.index.current = elementToggles.indexOf(elementToggleActive);
      elementItem.classList.remove(elementConfig.item.name.list[elementConfig.index.current]);
      elementItem.classList.add(elementConfig.item.name.list[elementConfig.index.next]);
      toggleElementsState(elementToggles[elementConfig.index.current], elementToggles[elementConfig.index.next], elementConfig.btn.name.active);
    }
  });
}

const sliderContainer = document.querySelector(sliderConfig.container.id);

if (sliderContainer) {
  toggleElement(sliderContainer, sliderConfig);
}

const pricesContainer = document.querySelector(pricesConfig.container.id);

if (pricesContainer) {
  swipeElement(pricesContainer, pricesConfig);
}

const applicationContainer = document.querySelector(applicationConfig.container.id);

if (applicationContainer) {
  toggleElement(applicationContainer, applicationConfig);
}
