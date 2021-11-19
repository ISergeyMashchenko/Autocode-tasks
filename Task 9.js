const validateTitle = (value) => {
  if (typeof value !== 'string') {
    return 'Incorrect input data';
  }
  if (
    value.length > 2 &&
    value.length < 20 &&
    value[0] === value[0].toUpperCase() &&
    isNaN(value[0])
  ) {
    return 'VALID';
  }
  return 'INVALID';
}

const sum = (value1, value2) => {
  let divided = value1;
  let stringNumber = value2;
  if (typeof value1 === 'string' && !isNaN(value1)) {
    stringNumber = value1;
    divided = value2;
  }
  if (divided % 3 === 0 || divided % 5 === 0 || divided % 15 === 0) {
    divided = divided * -1;
  }
  return divided + +stringNumber;
};
