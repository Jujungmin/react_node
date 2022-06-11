import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	* {
		margin: 0; padding: 0;
	}
	ul, ol, li {
		list-style: none;
	}
	a {
		color: #777;
		text-decoration: none;
	}
`;

export default GlobalStyles;