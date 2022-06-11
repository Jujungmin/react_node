import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
	width: 350px;
	height: 100vh;
	position: fixed;
	background: #222;
	top: 0;
	left: 0;
	padding: 50px;
	h1 {
		margin-bottom: 40px;
		a {
			font: 50px/1 'arial';
			color: #fff;
		}
	}
`;

const Gnb = styled.ul`
	a {
		display: block;
		padding: 10px;
		font: bold 16px/1 'arial';
		color: #bbb;

		&:hover {
			color: hotpink;
		}
	}
`;

function Header() {
	return (
		<HeaderWrapper>
			<h1>
				<NavLink to='/'>LOGO</NavLink>
			</h1>

			<Gnb>
				<li>
					<NavLink to='/list'>Show List</NavLink>
				</li>
				<li>
					<NavLink to='/create'>Write Post</NavLink>
				</li>
			</Gnb>
		</HeaderWrapper>
	);
}

export default Header;