const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require("method-override");
var router_app = require("./routes");

app.use(cors());
app.use(bodyParser.json());//peticiones JSON
app.use(bodyParser.urlencoded({extened: true}));
app.use(methodOverride("_method"));
app.use(router_app);


app.listen(3000, function () {
  console.log('app listening on port 3000!');
});
