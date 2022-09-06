const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const customAuth = token.length < 500;

    let decodedData;

    if(token && customAuth) {
      decodedData = jwt.verify(token, 'test');
      req.userId = decodedData?.id;
    }else {
      decodedData = jwt.verify(token);
      req.userId = decodedData?.sub;
    }
    next();
  } catch(err) {
    console.log(err)
  }
}

module.exports = auth;