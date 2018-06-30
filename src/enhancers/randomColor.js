export default () => {
  let hexChars = '0123456789abcdef'.split``;
  let color = '';
  for (let i = 0; i < 6; i++) {
    color += hexChars[Math.floor(Math.random() * hexChars.length)];
  }
  return '#' + color;
}