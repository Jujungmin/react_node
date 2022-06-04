import axios from 'axios';
import { useState, useEffect} from 'react';
import Layout from '../Common/Layout';

function List() {
	const [List, setList] = useState([]);

	useEffect(() => {
		axios
			.post('/api/read')
			.then((res) => {
				if(res.data.success) {
					console.log(res.data.communityList);
					setList(res.data.communityList);
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<Layout name={'List'}>
			{List.map((post, idx) => {
				<article key={post._id}>
					<h2>{post.title}</h2>
					<h2>{post.content}</h2>
				</article>
			})}
		</Layout>
	)
}

export default List;