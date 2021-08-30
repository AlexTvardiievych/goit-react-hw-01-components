export const colorRandomizer = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  return backgroundColor;
};
