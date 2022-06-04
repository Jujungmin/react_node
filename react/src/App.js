import { BrowserRouter as Routes, Route } from "react-router-dom";

import Header from './Common/Header';
import Main from './Common/Main';
import List from './Community/List';
import Create from './Community/Create';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/list' element={<List />} />
				<Route path='/create' element={<Create />} />
			</Routes>
		</>
	);
}

export default App;