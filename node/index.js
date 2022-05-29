const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const port = 5000;

// express에서 react폴더 안쪽의 build폴더를 static으로 지정
app.use(express.static(path.join(__dirname, '../react/build')));

// 클라이언트에서 보내는 데이터를 받도록 설정(body-parser)
app.use(express.json());
app.use(express.urlencoded({extneded: true}));

app.listen(port, () => {
	mongoose
	.connect('mongodb+srv://Jujungmin:zxcvzmfhd2!@cluster0.n0zcs.mongodb.net/?retryWrites=true&w=majority')
	.then(() => {
	console.log('Server Listening on port:' + port);
	console.log('mongoDB success')
	})
	.catch((err) => {
		console.log(err);
	});
})

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../react/build/index.html'));
});

// react로부터 받은 요청처리
app.post('/api/send', (req, res) => {
	console.log(req.body);
	res.status(200).json({success: true, result: req.body.name + '2'});
});