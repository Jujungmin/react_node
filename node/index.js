const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const port = 5000;

// express에서 react폴더 안쪽의 build폴더를 static으로 지정
app.use(express.static(path.join(__dirname, '../react/build')));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Post모델 불러옴
const {post} = require('./model/postSchema.js');

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

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../react/build/index.html'));
});

// react로부터 받은 요청처리
app.post('/api/create', (req, res) => {
	console.log(req.body);
	
	const PostModel = new Post({
		title: req.body.title,
		content: req.body.content
	});

	PostModel.save.then(() => {
		res.status(200).json({success: true});
	})
	.catch(err => {
		console.log(err);
		res.status(400).json({success: false});
	})
});