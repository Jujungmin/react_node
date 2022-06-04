import axios from 'axios';
import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
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
					{/* 각 제목 라우터 링크로 글 고유번호 추가 */}
					<Link to={`/detail/${post.communityNum}`}>
						{post.title}
					</Link>
				</article>
			})}
		</Layout>
	)
}

export default List;