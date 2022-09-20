module.exports = async (req, res, next) => {
  try {

    const { operations } = req.body;
    const [value1, value2 ] = operations;
    console.log(value1);
    console.log(value2);


    const results = [];

    operations.forEach((op) => {
      const { value1, value2 } = op;

      resp = value1 + value2;


      results.push({ result: resp, value1, value2, operations: 'Addition' });



    });



    res.json({ results });

  }catch (error) {
    console.log(error);
    next(error);
  }
};
