(function () {
  'use strict';

  const onoffswitch_checked = `onoffswitch_checked`;

  const body = document.querySelector(`body`);
  const onoffswitch = body.querySelector(`.onoffswitch`);

  const onoffswitchOnClick = () => {
    onoffswitch.classList.toggle(onoffswitch_checked);
  };

  onoffswitch.addEventListener(`click`, onoffswitchOnClick);

}());

//# sourceMappingURL=onoffswitch.js.map
