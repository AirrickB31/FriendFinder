const  express = require("express"); 
const path = require("path"); 
const bodyParser = require("body-parser"); 

const app = express(); 

const PORT = process.env.PORT || 8080;


app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())


require(path.join(__dirname, "/app/routing/apiRoutes.js"))(app); 
require(path.join(__dirname, "/app/routing/htmlRoutes.js"))(app);

app.listen(PORT, function(){
    console.log('App listenting on PORT: ' + PORT);
});

