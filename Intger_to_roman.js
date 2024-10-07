function intToRoman(number) {
  let num = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let sym = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let roman = "";

  // Subtraction Method
  // time complexity O(1)
  for (i = 0; i < num.length; i++) {
    while (number >= num[i]) {
      roman += sym[i];
      number -= num[i];
    }
  }
  return roman;
}

function intToRomanDiv(number) {
  let num = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let sym = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let roman = "";

  // Division Method
  // time complexity O(1)
  for (i = 0; i < num.length; i++) {
    if (number >= num[i]) {
      let div = Math.floor(number / num[i]);

      number = number % num[i];

      roman += sym[i].repeat(div);
    }
  }
  return roman;
}

console.log(intToRoman(3549));

console.log(intToRomanDiv(3549));
