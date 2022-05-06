// get format 1 to 001 for card order number
export const pad = (number, length) => {
  var str = "" + number;
  while (str.length < length) {
    str = "0" + str;
  }
  return str;
};
