export const createImage = (imgUrl, onLoad) => {
  const img = new Image();
  img.src = imgUrl;

  img.onload = function () {
    onLoad(this);
  };
};

export function getBase64Image(img) {
  var canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;

  var ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);

  var dataURL = canvas.toDataURL('image/png');

  return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
}

export const getImageUrl = (base64Image) => {
  return 'data:image/png;base64,' + base64Image;
};
