function convert() {
  return [...arguments].map(el => {
    if (typeof el === 'string') {
      return +el;
    }
    return el + '';
  });
}

const executeforEach = (array, func) => {
  for (let i = 0; i < array.length; i++) {
    func(array[i]);
  }
  return;
};

const mapArray = (arr, func) => {
  let newAr = [];
  executeforEach(arr, el => newAr.push(func(+el)));
  return newAr;
};

const filterArray = (arr, func) => {
  let newAr = [];
  executeforEach(arr, el => {
    if (func(el)) {
      newAr.push(el);
    }
  });
  return newAr;
};

const flipOver = str => {
  return str.split('').reverse().join('');
};

const makeListFromRange = array => {
  let ar = [];
  if (array.length > 1) {
    for (let i = array[0]; i <= array[1]; i++) {
      ar.push(i);
    }
  }
  if (array.length === 1) {
    ar = [...array];
  }
  return ar;
};

const getArrayOfKeys = (array, name) => {
  return array.map(el => el[name]);
};
const actors = [
  { name: 'tommy', age: 36 },
  { name: 'lee', age: 28 },
];

const substitute = ar =>
  ar.map(el => {
    if (el < 30) {
      el = '*';
      return el;
    }
    return el;
  });

const getPastDay = (date, pastdays) => {
  return new Date(date.setDate(date.getDate() - pastdays)).getDate();
};

const formatDate = date => {
  let dd = date.getDate();
  if (dd < 10) dd = '0' + dd;
  let mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;
  let yy = date.getFullYear();
  if (yy < 10) yy = '0' + yy;
  let hh = date.getHours();
  if (hh < 10) hh = '0' + hh;
  let min = date.getMinutes();
  if (min < 10) min = '0' + min;
  return yy + '/' + mm + '/' + dd + ' ' + hh + ':' + min;
};
