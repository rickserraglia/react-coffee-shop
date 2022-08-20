import { ShoppingCart } from 'phosphor-react';
import { CoffeeItemContainer } from './styles';

interface CoffeeItemProps {
	image: string;
	category: string[];
	name: string;
	text: string;
	price: string;
}

export const CoffeeItem = ({
	image,
	category,
	name,
	text,
	price
}: CoffeeItemProps) => {
	return (
		<CoffeeItemContainer>
			<img src={image} alt="" />
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
				<form action="#">
					<span>
						R$ <span>{price}</span>
					</span>
					<input
						className="quantityInput"
						type="number"
						min={1}
						defaultValue={1}
					/>
					<button className="cart">
						<ShoppingCart size={22} />
					</button>
				</form>
			</footer>
		</CoffeeItemContainer>
	);
};
