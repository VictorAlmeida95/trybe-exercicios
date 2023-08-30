const cToF = (value) => (value * 1.8) + 32;
const fToC = (value) => (value - 32) / 1.8;

module.exports = {
  cToF,
  fToC
};