const evenNumbersInArray = (array) => {
    if (array.length == 0 || !Array.isArray(array)){
    return 'Passed argument is not an array or empty';
   } else
   if(array.some(x => x % 2 === 0) == false){
     return 'Passed array does not contain even numbers';
   } 
   return array.filter( x => x % 2 === 0 );
 };

module.exports = evenNumbersInArray;
