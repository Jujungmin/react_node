import axios from 'axios';
import { useEffect } from 'react';

function App() {
	const item = {
		name: 'David'
	}
	useEffect(() => {
		axios
		.post('/api/send', item)
		.then((res) => {
			console.log(res);
		}).catch((err) => {
			console.log(err);
		})
	}, []);

	return <h1>React Project</h1>;
}

export default App;
