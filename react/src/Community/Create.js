import axios from 'axios';
import { useEffect, useState } from 'react';

function Create() {
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
		<section>
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
		</section>
	);
}

export default Create;