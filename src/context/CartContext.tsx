import { createContext, ReactNode, useState } from 'react';
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
}

interface CartProviderProps {
	children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export const CartProvider = ({ children }: CartProviderProps) => {
	const [cartItems, setCartItems] = useState<CartItems[]>([]);

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
				setCartItems(updatedQuantity);
			}
		} else {
			const newItem = coffeesList.find((coffee) => coffee.id === newItemId);
			if (newItem) {
				setCartItems((state) => [...state, { ...newItem, quantity }]);
			}
		}
	};

	return (
		// eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
		<CartContext.Provider value={{ cartItems, updateCart }}>
			{children}
		</CartContext.Provider>
	);
};
