const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json())
app.post('/', function (req, res) {
    req.header('content-type:application/json','body:{"name":"Mugesh"}')
	console.log(req.body.name)
	res.end();

})
app.listen(PORT, function (err) {

	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
