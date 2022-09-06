const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connection Success`);
  })
  .catch((err) => console.log(`Error ${err}`));
