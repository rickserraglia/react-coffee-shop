import { Trash } from 'phosphor-react';
import { useContext } from 'react';
import { CartContext } from '../../../../../context/CartContext';
import { priceFormatter } from '../../../../../utils/formatter';
import { CartItemContainer } from './styles';

export const CartItem = ({ item }: any) => {
	const { updateCart } = useContext(CartContext);
	// eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
	const handleUpdateItemQuantity = (e: any) => {
		updateCart(item.id, parseInt(e.target.value), true);
	};
	// eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
	const handleDeleteItem = () => {
		updateCart(item.id, 0);
	};

	return (
		<CartItemContainer>
			<img src={item.image} alt="" />
			<div>
				<p>{item.name}</p>
				<div>
					<input
						type="number"
						defaultValue={item.quantity}
						onChange={handleUpdateItemQuantity}
						min={1}
					/>
					<button onClick={handleDeleteItem}>
						<Trash size={16} />
						<span>Remover</span>
					</button>
				</div>
			</div>
			<span>{priceFormatter.format(item.price)}</span>
		</CartItemContainer>
	);
};
