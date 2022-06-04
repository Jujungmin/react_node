import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Common/Layout';

function Create() {
	const navigate = useNavigate();
	const [tit, setTit] = useState('');
	const [con, setCon] = useState('');

	const handleCreate = () => {
		const item = {
			title: tit,
			content: con,
		};

		axios
			.post('/api/create', item)
			.then((res) => {
				console.log(res);
				if (res.data.success) {
					alert('데이터 저장에 성공했습니다.');
					navigate('/list');
				} else {
					alert('데이터 저장에 실패했습니다');
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {}, []);

	return (
		<Layout name={'Post'}>
			<label htmlFor='tit'>Title</label>
			<br />
			<input
				type='text'
				id='tit'
				value={tit}
				onChange={(e) => setTit(e.target.value)}
			/>
			<br />

			<label htmlFor='con'>Content</label>
			<br />
			<textarea
				id='con'
				value={con}
				onChange={(e) => setCon(e.target.value)}></textarea>
			<br />
			<button onClick={handleCreate}>SEND</button>
		</Layout>
	);
}

export default Create;