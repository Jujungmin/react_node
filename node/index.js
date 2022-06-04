const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const port = 5000;

app.use(express.static(path.join(__dirname, '../react/build')));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(port, () => {
	mongoose
	.connect('mongodb+srv://Jujungmin:zxcvzmfhd2!@cluster0.n0zcs.mongodb.net/reactNode?retryWrites=true&w=majority')
	.then(() => {
	console.log('Server Listening on port:' + port);
	console.log('mongoDB success')
	})
	.catch((err) => {
		console.log(err);
	});
})

//전용 라우터 호출
app.use(
	'/api/community',
	require('./router/communityRouter.js')
);

app.get('/', (req, res) => {
	res.sendFile(
		path.join(__dirname, '../react/build/index.html')
	);
});