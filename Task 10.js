const getSum = (str1, str2) => {
  if (str1 === '') {
    str1 = '0';
  }
  if (str2 === '') {
    str2 = '0';
  }
  if (
    typeof str1 === 'string' &&
    typeof str2 === 'string' &&
    str1.split('').every(el => !isNaN(+el)) &&
    str2.split('').every(el => !isNaN(+el))
    ) {
      if (str1.length > str2.length) {
        let temp = str1;
        str1 = str2;
        str2 = temp;
    }
    let str = '';
    let n1 = str1.length,
        n2 = str2.length;
    str1 = str1.split('').reverse().join('');
    str2 = str2.split('').reverse().join('');
    let carry = 0;
    for (let i = 0; i < n1; i++) {
      let sum =
        str1[i].charCodeAt(0) -
        '0'.charCodeAt(0) +
        (str2[i].charCodeAt(0) - '0'.charCodeAt(0)) +
        carry;
      str += String.fromCharCode((sum % 10) + '0'.charCodeAt(0));
      carry = Math.floor(sum / 10);
    }
    for (let i = n1; i < n2; i++) {
      let sum = str2[i].charCodeAt(0) - '0'.charCodeAt(0) + carry;
      str += String.fromCharCode((sum % 10) + '0'.charCodeAt(0));
      carry = Math.floor(sum / 10);
    }
    if (carry > 0) {
      str += String.fromCharCode(carry + '0'.charCodeAt(0));
    }
    str = str.split('').reverse().join('');
    return str;
  }
  return false;
};

const getQuantityPostsByAuthor = (listOfPosts, authorName) => {
  let post = listOfPosts.filter(el => el.author === authorName).length || 0;
  let comments =
    listOfPosts
      .map(el => el.comments)
      .filter(el => el)
      .flatMap(el => el)
      .filter(comment => comment.author === authorName).length || 0;
  return `Post:${post},comments:${comments}`;
};

const tickets=(people)=> {
  people = people.map(el => +el);
  let [n25, n50, n100] = [0, 0, 0];
  for (let i = 0; i < people.length; i++) {
    switch (people[i]) {
      case 25:
        n25++;
        break;
      case 50:
        n50++;
        n25--;
        break;
      case 100:
        n100++;
        n25--;
        if (n50) {
          n50--;
        } else {
          n25 -= 2;
        }
        break;
    }
    if ([n25, n50, n100].some(v => v < 0)) {
      return 'NO';
    }
  }
  return 'YES';
};


module.exports = {getSum, getQuantityPostsByAuthor, tickets};
