import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import { CheckoutLayoutContainer } from './styles';

export const CheckoutLayout = () => {
	return (
		<>
			<Header />
			<CheckoutLayoutContainer>
				<Outlet />
			</CheckoutLayoutContainer>
		</>
	);
};
