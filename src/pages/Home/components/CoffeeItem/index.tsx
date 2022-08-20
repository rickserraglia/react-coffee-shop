import { ShoppingCartSimple } from 'phosphor-react';
import { useContext } from 'react';
import { CartContext } from '../../../../context/CartContext';
import { CoffeeItemContainer } from './styles';

import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { noCurrencyLocaleFormatter } from '../../../../utils/formatter';

const addToCartSchema = z.object({
	quantity: z.number()
});

type addToCartInputsType = z.infer<typeof addToCartSchema>;

interface CoffeeItemProps {
	id: number;
	image: string;
	category: string[];
	name: string;
	text: string;
	price: number;
}

export const CoffeeItem = ({
	id,
	image,
	category,
	name,
	text,
	price
}: CoffeeItemProps) => {
	const { updateCart } = useContext(CartContext);

	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
		reset
	} = useForm<addToCartInputsType>({
		resolver: zodResolver(addToCartSchema)
	});

	// eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
	const handleUpdateCart = (data: addToCartInputsType) => {
		updateCart(id, data.quantity);
		reset();
	};

	return (
		<CoffeeItemContainer>
			<img src={image} alt={name} />
			<div>
				{category.map((item) => {
					return (
						<span key={item} className="badge">
							{item}
						</span>
					);
				})}
			</div>
			<h3>{name}</h3>
			<p>{text}</p>
			<footer>
				<form onSubmit={handleSubmit(handleUpdateCart)}>
					<span>
						R$ <span>{noCurrencyLocaleFormatter.format(price)}</span>
					</span>
					<div>
						<input
							className="quantityInput"
							type="number"
							min={1}
							defaultValue={1}
							{...register('quantity', { valueAsNumber: true })}
						/>
						<button type="submit" className="cart" disabled={isSubmitting}>
							<ShoppingCartSimple size={22} weight="fill" />
						</button>
					</div>
				</form>
			</footer>
		</CoffeeItemContainer>
	);
};
