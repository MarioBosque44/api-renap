const mongoose = require("mongoose");

const URI = "mongodb+srv://danielaldamas:84RXI228@cluster0.wo935.mongodb.net/prueba1?retryWrites=true&w=majority";

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((db) => console.log("db is connected"))
  .catch((err) => console.error(err));

module.exports = mongoose;