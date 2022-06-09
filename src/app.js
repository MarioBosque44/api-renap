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
    res.send('Hola Dani')
})
// Middlewares
// const corsOptions = {origin: "http://localhost:4200"}
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/peoples", require("./routes/people.routes"));

module.exports = app;