const body = document.querySelector(`body`);

const HISTORY__SHOW = `.history__show`;
const DISPLAY_NONE = `none`;
const DISPLAY_BLOCK = `block`;

const historShowElements = body.querySelectorAll(HISTORY__SHOW);

const historyShowOnClick = (evt) => {
  const hiddenContent = evt.target.closest(HISTORY__SHOW).nextElementSibling.style;
  
  if (hiddenContent.display === DISPLAY_NONE) {
    hiddenContent.display = DISPLAY_BLOCK;
  } else {
    hiddenContent.display = DISPLAY_NONE;
  }
}

historShowElements.forEach((element) => {
  element.nextElementSibling.style.display = `none`;
  element.addEventListener(`click`, historyShowOnClick);
});
const ONOFFSWITCH_CHECKED = `onoffswitch_checked`;
const THEME = `.theme`;
const THEME_COLOR_PROJECT_INVERSE = `theme_color_project-inverse`;
const THEME_COLOR_PROJECT_DEFAULT = `theme_color_project-default`;

const onoffswitch = body.querySelector(`.onoffswitch`);

const onoffswitchOnClick = () => {
  onoffswitch.classList.toggle(ONOFFSWITCH_CHECKED);
  const theme = onoffswitch.closest(THEME);
  theme.classList.toggle(THEME_COLOR_PROJECT_INVERSE);
  theme.classList.toggle(THEME_COLOR_PROJECT_DEFAULT);
}

onoffswitch.addEventListener(`click`, onoffswitchOnClick);
//# sourceMappingURL=script.js.map
