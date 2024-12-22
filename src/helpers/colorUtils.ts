export const getHoverColors = () => {
  const rootStyle = getComputedStyle(document.documentElement);

  return [
    rootStyle.getPropertyValue('--main-pink-color').trim(),
    rootStyle.getPropertyValue('--main-hot-pink-color').trim(),
    rootStyle.getPropertyValue('--main-blue-color').trim(),
  ];
};

export const getHoverColorsNoYellow = () => {
  const rootStyle = getComputedStyle(document.documentElement);

  return [
    rootStyle.getPropertyValue('--main-pink-color').trim(),
    rootStyle.getPropertyValue('--main-hot-pink-color').trim(),
    rootStyle.getPropertyValue('--main-blue-color').trim(),
  ];
};

export const getRandomHoverColor = () => {
  const hoverColors = getHoverColors();
  return hoverColors[Math.floor(Math.random() * hoverColors.length)];
};

export const getRandomHoverColorNoYellow = () => {
  const hoverColors = getHoverColorsNoYellow();
  return hoverColors[Math.floor(Math.random() * hoverColors.length)];
};