export default function hex2rgb(hex, percent = 0) {
  const regEx = /#[\da-fA-F]{6,6}/;
  
  const r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

  if (hex.length < 7) {
    return null;
  }

  if (!regEx.test(hex)) {
    return 'Ошибка!';
  }

  if (percent) {
    return hex2rgb(rgbBackColor(hex, percent));
  }

  return `rgb(${r}, ${g}, ${b})`;
}

export function rgbBackColor(color, percent) {
  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);

  R = parseInt((R * (100 + percent)) / 100);
  G = parseInt((G * (100 + percent)) / 100);
  B = parseInt((B * (100 + percent)) / 100);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  let RR = R.toString(16).length === 1 ? '0' + R.toString(16) : R.toString(16);
  let GG = G.toString(16).length === 1 ? '0' + G.toString(16) : G.toString(16);
  let BB = B.toString(16).length === 1 ? '0' + B.toString(16) : B.toString(16);

  return '#' + RR + GG + BB;
}

export function setOutputFontColor(rgb) {
  const regex = /rgb\(\d.*\d\)/;

  if (!regex.test(rgb)) {
    return false;
  }

  const nums = rgb.match(/\d.*\d/)[0].split(',').map(s => +s),
        sum = nums.reduce((acc, el) => acc + el, 0);
  
  if (sum < 450) {
    return true;
  }
  
  return false;
}