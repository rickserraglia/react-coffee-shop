import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import { StoreLayoutContainer } from './styles';

export const StoreLayout = () => {
	return (
		<>
			<Header />
			<StoreLayoutContainer>
				<Outlet />
			</StoreLayoutContainer>
		</>
	);
};
