import { BrowserRouter as Routes, Route } from "react-router-dom";

import Header from './Common/Header';
import Main from './Main';
import List from './Community/List';
import Create from './Community/Create';
import Detail from './Community/Detail';
import GlobalStyles from "./Styles/GlobalStyles";

function App() {
	return (
		<>
			<GlobalStyles />
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/list' element={<List />} />
				<Route path='/create' element={<Create />} />
				<Route path='/detail/:num' element={<Detail />} />
			</Routes>
		</>
	);
}

export default App;