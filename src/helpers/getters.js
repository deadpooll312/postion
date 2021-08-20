export const getBounds = (width, height) => {
  const x0 = 0;
  const y0 = 0;
  const x1 = 100;
  const y1 = (height * x1) / width;
  return [
    { lat: y0, lng: x0 },
    { lat: y1, lng: x1 },
  ];
};
