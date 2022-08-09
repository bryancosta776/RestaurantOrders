

module.exports = async (req, res, next) => {
  try {
    const { value1, value2 } = req.body;

    const operations = ({
      'operations':
        [
        {
          value1,
          value2
        },
        {
          value1,
          value2
        },
        {
          value1,
          value2
        }
      ]
    });

    return res.json(
      { 'results':[
        { 'total':  operations.operations[0].value1 + value2 },
        { 'total':  operations.operations[1].value1 + value2 },
        { 'total':  operations.operations[2].value1 + value2 }
        ]
        }

      );
  } catch (error) {
    next(error);
  }


};
