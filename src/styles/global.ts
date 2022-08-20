import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	:root {
		font-size: 62.5%;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:focus {
 		outline: 0;
 		box-shadow: 0 0 0 1px ${(props) => props.theme['yellow-dark']};
 	}

	body {
		background: ${(props) => props.theme.background};
		color: ${(props) => props.theme.text};
		-webkit-font-smoothing: antialiased;
	}

	body, input, textarea, button {
		font-family: 'Roboto', sans-serif;
		font-size: 1.6rem;
		font-weight: 400;
		line-height: 1.3;
 	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: 'Baloo 2', cursive;
		font-weight: 700;
	}

	ul,
	li {
		list-style: none;
		padding: 0;
	}
`;
