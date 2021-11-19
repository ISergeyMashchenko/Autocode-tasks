const findVowels = (str) => {
    let message = 'Passed argument is not a string';
    if (!str) {
        return 'String is empty';
    }
    if (typeof str === 'string' || str instanceof String) {
    const checkForVowels= str.match(/[aeiou]/gi);
    checkForVowels
      ? (message = checkForVowels.length)
      : (message = 'String does not contain vowels');
    }
    return message;
};

module.exports = findVowels;