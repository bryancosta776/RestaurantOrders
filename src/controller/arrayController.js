module.exports = (req, res, next) => {
  try {
    const arrString = ['pera', 'maça', 'pera', 'banana', 'laranja', 'mamao', 'melancia', 'pera'];
    resultFinal = 0;
    const word = 'pera';

    for(i = 0; i <= arrString.length; i++){
        if(arrString[i] === word){
          resultFinal += 1;

        };
    }

  const arrNumber = [1, 2, 3, 4, 5, 6];

  let sum = 0;

  for (let i = 0; i < arrNumber.length; i++) {
    sum += arrNumber[i];
  }


  const intArray = [89, 87, 67, 45, 13];

  for(let i = 0; i < intArray.length; i++){
    for(let j = 0; j < intArray[i].length; j++){
      if(intArray[i][j] > intArray[i]){
        intArray[i][j];
        console.log(intArray[i]);


    }

  }
}


  const rex = /^([A-Za-z])+$/;

  const word = 'pará';

  for(let i = 0; i < word.length; i++){
    if(rex.test(word[i]) === false){
      console.log(word[i]);
    };


  }catch (error) {
      next(error);
    }
};
