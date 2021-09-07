const express = require('express')
const bodyParser = require("body-parser");
const ejs = require("ejs")
const app = express()
const port = 3000


app.set('view engine', 'ejs');



app.use(express.static("public"));
app.get('/', (req, res) => {
    
    res.render("home");

})

app.post('/Result', (req, res) => {  
    res.render("graph");

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})