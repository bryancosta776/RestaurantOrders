module.exports = (req, res, next) => {
  try {
    /* const arrString = ['pera', 'maça', 'pera', 'banana', 'laranja', 'mamao', 'melancia', 'pera'];
    resultFinal = 0;
    let word = 'pera';

    for(i = 0; i <= arrString.length; i++){
        if(arrString[i] === word){
          resultFinal += 1;
          console.log(resultFinal);
        };
    } */

/*   const arrNumber = [1, 2, 3, 4, 5, 6];

  let sum = 0;

  for (let i = 0; i < arrNumber.length; i++) {
    sum += arrNumber[i];
  }
  console.log(sum);
 */




 } catch (error) {
    next(error);
  }
};

