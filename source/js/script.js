//---------- MENU ----------//
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

const menuContainer = document.querySelector(menuConfig.container.class.item);
const menuItem = document.querySelector(menuConfig.item.id);
const menuBtn = menuContainer.querySelector(menuConfig.btn.class.item);

if (menuItem && menuBtn) {
  window.onload = function(){
    menuContainer.classList.remove(menuConfig.container.name.active);
    menuItem.classList.remove(menuConfig.item.name.active);
    menuBtn.classList.remove(menuConfig.btn.name.close);
  };
  menuBtn.addEventListener("click", function(evt) {
    menuContainer.classList.toggle(menuConfig.container.name.active);
    menuItem.classList.toggle(menuConfig.item.name.active);
    menuBtn.classList.toggle(menuConfig.btn.name.close);
  });
}


//---------- SLIDER ----------//
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
    },
    left: {
      name: "slider__btn--left"
    },
    right: {
      name: "slider__btn--right"
    },
  },
  index: {
    current: 0,
    next: 0
  }
};

const sliderContainer = document.querySelector(sliderConfig.container.id);

if (sliderContainer) {
  function changeSlide(sliderList, sliderToggles, sliderConfig) {
      sliderList[sliderConfig.index.current].classList.remove(sliderConfig.item.name.active);
      sliderList[sliderConfig.index.next].classList.add(sliderConfig.item.name.active);
      sliderToggles[sliderConfig.index.current].classList.remove(sliderConfig.btn.name.active);
      sliderToggles[sliderConfig.index.next].classList.add(sliderConfig.btn.name.active);
  }

  const sliderList = sliderContainer.querySelectorAll(sliderConfig.item.class.item);
  const sliderController = sliderContainer.querySelector(sliderConfig.controls.class.item);
  const sliderToggles = Array.prototype.slice.call(sliderController.children);
  //Click toggle
  sliderController.addEventListener("click", function (evt) {
    sliderConfig.index.next = sliderToggles.indexOf(evt.target);
    if (sliderConfig.index.next != -1) {
      const sliderToggleActive = sliderContainer.querySelector(sliderConfig.btn.class.active);
      sliderConfig.index.current = sliderToggles.indexOf(sliderToggleActive);
      changeSlide(sliderList, sliderToggles, sliderConfig);
    }
  });
  //Click arrow buttons
  sliderContainer.addEventListener("click", function (evt) {
    if (evt.target.classList.contains(sliderConfig.btn.left.name)) {
      const sliderSlideActive = sliderContainer.querySelector(sliderConfig.item.class.active);
      sliderConfig.index.current = Array.prototype.slice.call(sliderList).indexOf(sliderSlideActive);

      if (sliderConfig.index.current > 0) {
        sliderConfig.index.next = sliderConfig.index.current - 1;
        changeSlide(sliderList, sliderToggles, sliderConfig);
      }
    }

    if (evt.target.classList.contains(sliderConfig.btn.right.name)) {
      const sliderSlideActive = sliderContainer.querySelector(sliderConfig.item.class.active);
      sliderConfig.index.current = Array.prototype.slice.call(sliderList).indexOf(sliderSlideActive);

      if (sliderConfig.index.current < sliderList.length - 1) {
        sliderConfig.index.next = sliderConfig.index.current + 1;
        changeSlide(sliderList, sliderToggles, sliderConfig);
      }
    }
  });
}


//---------- PRICES ----------//
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

const pricesContainer = document.querySelector(pricesConfig.container.id);

if (pricesContainer) {
  const pricesItem = pricesContainer.querySelector(pricesConfig.item.class.item);
  const pricesController = pricesContainer.querySelector(pricesConfig.controls.class.item);
  const pricesToggles = Array.prototype.slice.call(pricesController.children);
  pricesController.addEventListener("click", function(evt) {
    pricesConfig.index.next = pricesToggles.indexOf(evt.target);
    if (pricesConfig.index.next != -1) {
      const pricesToggleActive = pricesContainer.querySelector(pricesConfig.btn.class.active);
      pricesConfig.index.current = pricesToggles.indexOf(pricesToggleActive);
      pricesItem.classList.remove(pricesConfig.item.name.list[pricesConfig.index.current]);
      pricesItem.classList.add(pricesConfig.item.name.list[pricesConfig.index.next]);
      pricesToggles[pricesConfig.index.current].classList.remove(pricesConfig.btn.name.active);
      pricesToggles[pricesConfig.index.next].classList.add(pricesConfig.btn.name.active);
    }
  });
}


//---------- LIKE ----------//
const likeConfig = {
  container: {
    id: "#photos"
  },
  item: {
    class: {
      item: ".photos__rates-value"
    }
  },
  btn: {
    name: {
      item: "photos__rates",
      active: "photos__rates--active"
    }
  }
};

const likeContainer = document.querySelector(likeConfig.container.id);
if (likeContainer) {
  likeContainer.addEventListener("click", function(evt) {
    if (evt.target.classList.contains(likeConfig.btn.name.item)) {
      let ratesValue = evt.target.querySelector(likeConfig.item.class.item);
      if (evt.target.classList.contains(likeConfig.btn.name.active)) {
        evt.target.classList.remove(likeConfig.btn.name.active);
        ratesValue.textContent = String(Number(ratesValue.textContent) - 1);
      } else {
        evt.target.classList.add(likeConfig.btn.name.active);
        ratesValue.textContent = String(Number(ratesValue.textContent) + 1);
      }
    }
  });
}


//---------- APP SHOW RANGE ----------//
let appEffectConfig = {
  container: {
    id: "#application-controls"
  },
  range: {
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

const appEffectContainer = document.querySelector(appEffectConfig.container.id);

if (appEffectContainer) {
  const appEffectRanges = appEffectContainer.querySelectorAll(appEffectConfig.range.class.item);
  const appEffectController = appEffectContainer.querySelector(appEffectConfig.controls.class.item);
  const appEffectButtons = Array.prototype.slice.call(appEffectController.children);

  appEffectController.addEventListener("click", function(evt) {
    appEffectConfig.index.next = appEffectButtons.indexOf(evt.target);
    if (appEffectConfig.index.next != -1) {
      const appEffectButtonActive = appEffectContainer.querySelector(appEffectConfig.btn.class.active);
      appEffectConfig.index.current = appEffectButtons.indexOf(appEffectButtonActive);

      appEffectRanges[appEffectConfig.index.current].classList.remove(appEffectConfig.range.name.active);
      appEffectRanges[appEffectConfig.index.next].classList.add(appEffectConfig.range.name.active);

      appEffectButtons[appEffectConfig.index.current].classList.remove(appEffectConfig.btn.name.active);
      appEffectButtons[appEffectConfig.index.next].classList.add(appEffectConfig.btn.name.active);
    }
  });
}


//---------- APP MOVE RANGE ----------//
const appCropConfig = {
  range: "#range-crop",
  toggle: "#toggle-crop",
  value: "#value-crop",
  default: 80,
  unit: "%"
};

const appFillpConfig = {
  range: "#range-fill",
  toggle: "#toggle-fill",
  value: "#value-fill",
  default: 50,
  unit: "%"
};

const appContrastConfig = {
  range: "#range-contrast",
  toggle: "#toggle-contrast",
  value: "#value-contrast",
  default: 20,
  unit: "%"
};

const btnAppReset = document.querySelector("#app-ranges-reset");

function moveToggleRange(appElementConfig) {
  const rangeElement = document.querySelector(appElementConfig.range);
  const toggleElememt = document.querySelector(appElementConfig.toggle);
  const valueElememt = document.querySelector(appElementConfig.value);
  if (rangeElement) {
    rangeElement.onmousedown = function(evt) {
      let calcValue = evt.offsetX;
      if (appElementConfig.unit.indexOf("%") != -1) {
        let maxValue = parseInt(window.getComputedStyle(rangeElement).getPropertyValue("width"), 10);
        calcValue = Math.round(evt.offsetX / maxValue * 100);
      }
      toggleElememt.style.left = String(calcValue) + appElementConfig.unit;
      valueElememt.value = calcValue;
    }
  }

}

function resetRange(appElementConfig) {
  const rangeElement = document.querySelector(appElementConfig.range);
  const toggleElememt = document.querySelector(appElementConfig.toggle);
  const valueElememt = document.querySelector(appElementConfig.value);
  if (rangeElement) {
    toggleElememt.style.left = appElementConfig.default + appElementConfig.unit;
    valueElememt.value = appElementConfig.default;
  }
}

moveToggleRange(appCropConfig);
moveToggleRange(appFillpConfig);
moveToggleRange(appContrastConfig);

if (btnAppReset) {
  btnAppReset.addEventListener("click", function(evt) {
    evt.preventDefault();
    resetRange(appCropConfig);
    resetRange(appFillpConfig);
    resetRange(appContrastConfig);
  })
}


//---------- CONTEST FORM ----------//
const userSurnameRegExp = /^[A-Za-zА-Яа-яЁё]*\s*$/;
const userNameRegExp = /^[A-Za-zА-Яа-яЁё]*\s*$/;
const userEmailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const formContest = document.querySelector(".contest");

if (formContest) {
  const userSurname = formContest.querySelector("#contest__user-surname");
  const userName = formContest.querySelector("#contest__user-name");
  const userSecondname = formContest.querySelector("#contest__user-secondname");
  const userEmail = formContest.querySelector("#contest__contacts-email");
  const userTel = formContest.querySelector("#contest__contacts-tel");
  const userComment = formContest.querySelector("#contest__comment-text");
  const btnContestSubmit = formContest.querySelector("#btn-submit-contest");

  const modalMessage = formContest.querySelector(".contest__modal-message");
  const btnModalMessage = modalMessage.querySelector(".modal__btn");

  const modalError = formContest.querySelector(".contest__modal-error");
  const btnModalError = modalError.querySelector(".modal__btn");

  function validateValue(regExp,validateValue) {
    return regExp.test(validateValue);
  }

  if (btnContestSubmit) {
    btnContestSubmit.addEventListener("click", function(evt) {
      evt.preventDefault();

      let validationForm = true;

      userSurname.classList.remove("input-error");
      userName.classList.remove("input-error");
      userEmail.classList.remove("input-error");

      if (!validateValue(userSurnameRegExp,userSurname.value)) {
        userSurname.classList.add("input-error");
        validationForm = false;
      }

      if (!validateValue(userNameRegExp, userName.value)) {
        userName.classList.add("input-error");
        validationForm = false;
      }

      if (!validateValue(userEmailRegExp, userEmail.value)) {
        userEmail.classList.add("input-error");
        validationForm = false;
      }

      if (validationForm) {
        modalMessage.classList.add("modal--active");
        userSurname.value = "";
        userName.value = "";
        userSecondname.value = "";
        userEmail.value = "";
        userTel.value = "";
        userComment.value = "";
      } else {
        modalError.classList.add("modal--active");
      }
    });
  }

  if (btnModalMessage) {
    btnModalMessage.addEventListener("click", function() {
      modalMessage.classList.remove("modal--active");
    })
  }

  if (btnModalError) {
    btnModalError.addEventListener("click", function() {
      modalError.classList.remove("modal--active");
    })
  }
}
