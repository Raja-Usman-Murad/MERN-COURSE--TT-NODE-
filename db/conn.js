const mongoose = require("mongoose"); //for database require
const DB = process.env.DATABASE;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`connection successfull`);
  })
  .catch((err) => {
    console.log("database error", err);
  });
