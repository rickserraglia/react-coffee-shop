import { createContext, ReactNode, useEffect, useState } from 'react';

import { coffeesList } from '../assets/coffeesList';

interface CartItems {
	id: number;
	name: string;
	description: string;
	image: string;
	category: string[];
	price: number;
	quantity: number;
}

interface CartContextType {
	cartItems: CartItems[];
	updateCart: (id: number, qty: number, dir?: boolean) => void;
	resetCart: () => void;
}

interface CartProviderProps {
	children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export const CartProvider = ({ children }: CartProviderProps) => {
	const [cartItems, setCartItems] = useState<CartItems[]>([]);

	useEffect(() => {
		const storedStateAsJSON = localStorage.getItem(
			'@react-coffee:cart-Items-1.0.0'
		);

		if (storedStateAsJSON) {
			const localStorageJSON = JSON.parse(storedStateAsJSON);
			if (localStorageJSON.length) {
				setCartItems(localStorageJSON);
			}
		} else {
			localStorage.setItem('@react-coffee:cart-Items-1.0.0', '[]');
		}
	}, []);

	const resetCart = () => {
		setCartItems([]);
	};

	const updateCart = (
		newItemId: number,
		quantity: number,
		directly?: boolean
	) => {
		const isInCart = cartItems.find((item) => item.id === newItemId);

		const changingDirectly = !!directly;

		if (isInCart) {
			if (quantity === 0) {
				const removedFromCart = cartItems.filter(
					(item) => newItemId !== item.id
				);
				localStorage.setItem(
					'@react-coffee:cart-Items-1.0.0',
					JSON.stringify(removedFromCart)
				);
				setCartItems(removedFromCart);
			} else {
				const updatedQuantity = cartItems.map((item) => {
					if (item.id === newItemId) {
						if (changingDirectly) {
							return { ...item, quantity };
						} else {
							return { ...item, quantity: item.quantity + quantity };
						}
					}
					return item;
				});
				localStorage.setItem(
					'@react-coffee:cart-Items-1.0.0',
					JSON.stringify(updatedQuantity)
				);
				setCartItems(updatedQuantity);
			}
		} else {
			const newItem = coffeesList.find((coffee) => coffee.id === newItemId);
			if (newItem) {
				localStorage.setItem(
					'@react-coffee:cart-Items-1.0.0',
					JSON.stringify([...cartItems, { ...newItem, quantity }])
				);
				setCartItems((state) => [...state, { ...newItem, quantity }]);
			}
		}
	};

	return (
		// eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
		<CartContext.Provider value={{ cartItems, updateCart, resetCart }}>
			{children}
		</CartContext.Provider>
	);
};
