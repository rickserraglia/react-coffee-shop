import { Route, Routes } from 'react-router-dom';
import { CheckoutLayout } from './layouts/CheckoutLayout';
import { StoreLayout } from './layouts/StoreLayout';
import { CheckoutForm } from './pages/Checkout/CheckoutForm';
import { CheckoutSuccess } from './pages/Checkout/CheckoutSuccess';
import { Home } from './pages/Home';

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<StoreLayout />}>
				<Route path="/" element={<Home />} />
			</Route>
			<Route path="/checkout" element={<CheckoutLayout />}>
				<Route path="/checkout" element={<CheckoutForm />} />
				<Route path="/checkout/done" element={<CheckoutSuccess />} />
			</Route>
		</Routes>
	);
};
