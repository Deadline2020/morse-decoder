const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let result = "";
  for (let i = 0; i < expr.length; i += 10) {
    let letterCode = expr.slice(i, i + 10)
    let letterMorse = "";
    for (let j = 0; j < 10; j += 2) {
      let symbol = letterCode.slice(j, j + 2);
      if (symbol === "**") {
        letterMorse = 0;
        break;
      };
      if (symbol === "10") {
        letterMorse = letterMorse + ".";
      };
      if (symbol === "11") {
        letterMorse = letterMorse + "-";
      };
    }
    if (!letterMorse) result = result + " "
    else { result = result + MORSE_TABLE[letterMorse] };
  }
  return result;
}

module.exports = {
  decode
}
