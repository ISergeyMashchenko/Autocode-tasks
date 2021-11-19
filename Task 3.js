const detectPalindrome = (str) => {
    if (typeof str === 'string' && str !== '') {
        return str.toLowerCase() === str.toLowerCase().split('').reverse().join('')
          ? 'This string is palindrome!'
          : 'This string is not a palindrome!';
    } else if (str === '') {
        return 'String is empty';
    } else {
        return 'Passed argument is not a string';
    }
};

module.exports = detectPalindrome;
