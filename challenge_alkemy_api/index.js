require('dotenv').config();

let express = require('express'),
	app = express(),
	bodyParser = require('body-parser');

let listRoutes = require('./routes/listOp');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/views'));

app.get('/', function (req, res) {
	res.send('HI THERE FROM EXPRESS');
});

app.use('/api/ABMlist', listRoutes);

app.listen(process.env.PORT, function () {
	console.log('Conectado');
});
