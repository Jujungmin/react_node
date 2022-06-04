import { useParams } from 'react-router-dom';
import Layout from '../Common/Layout';

function Detail() {
	// 라우터 파라미터로 전달된 값 받음
	const params  = useParams();
	console.log(params);

	return (
		<Layout name={'Detail'}>
			<p>디테일 컴포넌트 입니다.</p>
		</Layout>
	)
}

export default Detail;