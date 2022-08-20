import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import { CartProvider } from './context/CartContext';

export const App = () => {
	return (
		<BrowserRouter>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyle />
				<CartProvider>
					<Router />
				</CartProvider>
			</ThemeProvider>
		</BrowserRouter>
	);
};
