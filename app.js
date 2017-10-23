const express = require('express');
const app = express();
var router_app = require("./routes");


// Connect to the db
app.use(router_app);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
