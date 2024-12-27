/**
 * Write a function to check if a string is empty
 * @param {String} text
 * @returns {Boolean}
 * @example
 * isStringEmpty('abc'); => false
 * isStringEmpty(''); => true
 * isStringEmpty('   '); => true
 * isStringEmpty(); => throws error "text must be defined"
 */
function isStringEmpty(text) {
  // Your code here
  if (text === undefined) {
    throw new Error("text must be defined");
  } else if (text.trim() === "") {
    return true;
  } else {
    return false;
  }
}
// console.log(isStringEmpty("abc"));
// console.log(isStringEmpty(""));
// console.log(isStringEmpty("   "));
// console.log(isStringEmpty());

/**
 * Write a function to truncate text
 * @param {String} text
 * @param {Number} numberOfCharacters
 * @returns {String}
 * @example
 * truncateString('Hello World', 2); => 'He'
 * truncateString('Hello world'); => throws error "Please specify number of characters to extract"
 * truncateString(''); => throws error "text must have at least one character"
 */
function truncateString(text, numberOfCharacters) {
  // Your code here
  if (text === "") {
    throw new Error("text must have at least one character");
  } else if (numberOfCharacters === undefined) {
    throw new Error("Please specify number of characters to extract");
  } else {
    return text.slice(0, numberOfCharacters);
  }
}
// console.log(truncateString("Hello World", 2));
// console.log(truncateString("Hello world"));
// console.log(truncateString(""));

/**
 * Write a function to create social media post hash tag
 * @param {String} text
 * @returns {String}
 * @example
 * createHashTag('Hello World'); => '#helloWorld'
 * createHashTag('i love javascript'); => '#iLoveJavascript'
 * createHashTag(''); => throws error "Text should have at least three characters"
 * createHashTag(); => throws error "Text should have at least three characters"
 * createHashTag('   '); => throws error "Text should have at least three characters"
 */
function createHashTag(text) {
  // Your code here
  if (!text || text.trim().length < 3) {
    throw new Error("Text should have at least three characters");
  }
  const words = text.trim().split(" ");
  console.log(words);
  words[0] = words[0].toLowerCase();
  for (let i = 1; i < words.length; i++) {
    words[i] =
      words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return "#" + words.join("");
}
// console.log(createHashTag("Hello World"));
// console.log(createHashTag("i love javascript"));
// console.log(createHashTag(""));

/**
 * Write a function to format phone number as '+998 99 777 66 55'
 * @param {Number} phoneNumber
 * @returns {String}
 * @throws {Error} 'Phone number must be either 9 or 12 characters long'
 * @example
 * formatPhoneNumber(998997776655); => '+998 99 777 66 55'
 * formatPhoneNumber(997776655); => '+998 99 777 66 55'
 * formatPhoneNumber(7776655); => throws error "Phone number must be either 9 or 12 characters long"
 * formatPhoneNumber(777665544332211); => throws error "Phone number must be either 9 or 12 characters long"
 * formatPhoneNumber(); => throws error "Phone number must be either 9 or 12 characters long"
 */
function formatPhoneNumber(phoneNumber) {
  if (
    !phoneNumber ||
    (String(phoneNumber).length !== 9 && String(phoneNumber).length !== 12)
  ) {
    throw new Error("Phone number must be either 9 or 12 characters long");
  }

  const phoneStr = String(phoneNumber);

  let formatted = "";
  if (phoneStr.length === 9) {
    formatted = "+998" + phoneStr;
  }

  if (phoneStr.length === 12 && phoneStr.startsWith("998")) {
    formatted = "+" + phoneStr;
  }

  formatted =
    formatted.slice(0, 4) +
    " " +
    formatted.slice(4, 6) +
    " " +
    formatted.slice(6, 9) +
    " " +
    formatted.slice(9, 11) +
    " " +
    formatted.slice(11);

  return formatted;
}
// console.log(formatPhoneNumber(998997776655));
// console.log(formatPhoneNumber(997776655));
// console.log(formatPhoneNumber(7776655));
// console.log(formatPhoneNumber(777665544332211));
// console.log(formatPhoneNumber());

/**
 * Write a function that transforms text to different cases
 * @param {String} text
 * @param {'camel'|'kebab'|'snake'} caseName - 'camel', 'kebab', 'snake'
 * @returns {String}
 * @example
 * changeTextCase('Hello World', 'camel'); => 'helloWorld'
 * changeTextCase('Hello World', 'kebab'); => 'hello-world'
 * changeTextCase('Hello World', 'snake'); => 'hello_world'
 *
 */
function changeTextCase(text, caseName) {
  // Your code here
  if (!text || typeof text !== "string") {
    throw new Error("Text must be a valid string");
  }
  if (!["camel", "kebab", "snake"].includes(caseName)) {
    throw new Error("Invalid caseName. Must be 'camel', 'kebab', or 'snake'");
  }
  const words = text.trim().toLowerCase().split(/\s+/);
  if (caseName === "camel") {
    return words
      .map((word, index) =>
        index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join("");
  } else if (caseName === "kebab") {
    return words.join("-");
  } else if (caseName === "snake") {
    return words.join("_");
  }
}
// console.log(changeTextCase("Hello World", "camel"));
// console.log(changeTextCase("Hello World", "kebab"));
// console.log(changeTextCase("Hello World", "snake"));
// console.log(changeTextCase("", "camel"));
// console.log(changeTextCase("Hello World", "upper"));

/**
 * Write a function to replace a given word in the text with the replacement word
 * @param {String} text - Some text
 * @param {String} word - A word that needs to be replaced
 * @param {String} replacement - A new word that will replace 'word' argument in the 'text'
 * @returns {String}
 * @example
 * const bigText = 'Winnie-the-Pooh (also known as Edward Bear, Pooh Bear or simply Pooh) is a fictional anthropomorphic teddy bear created by English author A. A. Milne and English illustrator E. H. Shepard. Winnie-the-Pooh first appeared by name in a children's story commissioned by London's Evening News for Christmas Eve 1925. The character is inspired by a stuffed toy that Milne had bought for his son Christopher Robin in Harrods department store, and a bear they had viewed at London Zoo.';
 * const replacedWord = 'Pooh';
 * const replacementWord = 'Puff'
 * replaceWordInText(bigText, replacedWord, replacementWord); =>
 * 'Winnie-the-Puff (also known as Edward Bear, Puff Bear or simply Puff) is a fictional anthropomorphic teddy bear created by English author A. A. Milne and English illustrator E. H. Shepard. Winnie-the-Puff first appeared by name in a children's story commissioned by London's Evening News for Christmas Eve 1925. The character is inspired by a stuffed toy that Milne had bought for his son Christopher Robin in Harrods department store, and a bear they had viewed at London Zoo.'
 */
function replaceWordInText(text, word, replacement) {
  if (!text || typeof text !== "string") {
    throw new Error("Text must be a valid string.");
  }
  if (!word || typeof word !== "string") {
    throw new Error("Word to replace must be a valid string.");
  }
  if (!replacement || typeof replacement !== "string") {
    throw new Error("Replacement must be a valid string.");
  }

  const regex = new RegExp(`\\b${word}\\b`, "g");

  return text.replace(regex, replacement);
}
const bigText =
  "Winnie-the-Pooh (also known as Edward Bear, Pooh Bear or simply Pooh) is a fictional anthropomorphic teddy bear created by English author A. A. Milne and English illustrator E. H. Shepard. Winnie-the-Pooh first appeared by name in a children's story commissioned by London's Evening News for Christmas Eve 1925. The character is inspired by a stuffed toy that Milne had bought for his son Christopher Robin in Harrods department store, and a bear they had viewed at London Zoo.";
const replacedWord = "Pooh";
const replacementWord = "Puff";

// console.log(replaceWordInText(bigText, replacedWord, replacementWord));

/**
 * Write a function to extract price in number format from the text
 * @param {String} text
 * @returns {Number}
 * @example
 * extractPriceFromText('Apple price in market is $2.32 per kg now'); => 2.32
 * extractPriceFromText('Apple price in market is $5 per kg now'); => 5
 * extractPriceFromText('There were no apples left in the shop'); => 'No matching price was found'
 */
function extractPriceFromText(text) {
  if (!text || typeof text !== "string") {
    throw new Error("Text must be a valid string.");
  }
  const regex = /\$(\d+(\.\d+)?)/;

  const match = text.match(regex);

  if (match) {
    return parseFloat(match[1]);
  } else {
    return "No matching price was found";
  }
}
console.log(extractPriceFromText("Apple price in market is $2.32 per kg now"));
console.log(extractPriceFromText("Apple price in market is $5 per kg now"));
console.log(extractPriceFromText("There were no apples left in the shop"));

module.exports = {
  changeTextCase,
  createHashTag,
  extractPriceFromText,
  isStringEmpty,
  replaceWordInText,
  truncateString,
  formatPhoneNumber,
};
