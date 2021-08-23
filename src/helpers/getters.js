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

const getRatio = ({ length, pointL0, pointL1 }) => {
  const { lat: ly0, lng: lx0 } = pointL0;
  const { lat: ly1, lng: lx1 } = pointL1;

  const lw = Math.abs(lx1 - lx0);
  const lh = Math.abs(ly1 - ly0);

  const hypo = (lw ** 2 + lh ** 2) ** 0.5;

  const ratio = length / hypo;

  return ratio;
};

export const getFinalBounds = ({
  length,
  x,
  y,
  pointA,
  pointL0,
  pointL1,
  height,
  width,
}) => {
  const ratio = getRatio({ length, pointL0, pointL1 });

  const realWidth = width * ratio;
  const realHeight = height * ratio;

  const { lat: movedY, lng: movedX } = pointA;

  const minX = x - movedX * ratio;
  const minY = y - movedY * ratio;
  const maxX = minX + realWidth;
  const maxY = minY + realHeight;

  return { minX, minY, maxX, maxY };
};
