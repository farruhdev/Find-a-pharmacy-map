let express = require("express");

let app = express();
let port = process.env.PORT || 80;

app.use(express.static("public_html"));
app.listen(80,function() {
    console.log("html listening");
});