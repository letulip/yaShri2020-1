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