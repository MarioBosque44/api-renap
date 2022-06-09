const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

// Settings
//app.set("port", process.env.PORT || 4000);
const PORT = process.env.PORT || 4000
app.listen(PORT, function(){
    console.log("Servidor en el puerto", PORT)
    
})

app.get('/' , function(req, res){
    res.send('[{"_id":"62a17a196ec034ad5e885b6c","firstName":"Daniel","lastName":"Aldamas","birthDat":"2022-05-06T00:00:00.000Z","birthFrom":"Quetzaltenango","DPI":"5013","genre":"Masculino","father":"Mario Bosque","mother":"Sofia Galicia","token":[],"createdAt":"2022-06-09T04:42:01.443Z","updatedAt":"2022-06-09T05:30:48.234Z"},{"_id":"62a185a0c562b1afee4fe0cf","firstName":"Jose","lastName":"Leiva","birthDat":"2022-02-06T00:00:00.000Z","birthFrom":"Guatemala","DPI":"4545","genre":"Masculino","father":"Jose Miguel","mother":"Darlen leiva","token":[],"createdAt":"2022-06-09T05:31:12.489Z","updatedAt":"2022-06-09T05:31:19.550Z"}]')
})
// Middlewares
// const corsOptions = {origin: "http://localhost:4200"}
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/peoples", require("./routes/people.routes"));

module.exports = app;