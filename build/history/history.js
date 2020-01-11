(function () {
  'use strict';

  const HISTORY__SHOW = `.history__show`;
  const DISPLAY_NONE = `none`;
  const DISPLAY_BLOCK = `block`;

  const body = document.querySelector(`body`);
  const historShowElements = body.querySelectorAll(HISTORY__SHOW);

  const historyShowOnClick = (evt) => {
    const hiddenContent = evt.target.closest(HISTORY__SHOW).nextElementSibling.style;
    
    if (hiddenContent.display === DISPLAY_NONE) {
      hiddenContent.display = DISPLAY_BLOCK;
    } else {
      hiddenContent.display = DISPLAY_NONE;
    }
  };

  historShowElements.forEach((element) => {
    element.nextElementSibling.style.display = `none`;
    element.addEventListener(`click`, historyShowOnClick);
  });

}());

//# sourceMappingURL=history.js.map
