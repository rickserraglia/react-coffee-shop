import { MapPin, ShoppingCart } from 'phosphor-react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { CartContext } from '../../context/CartContext';
import { HeaderContainer } from './styles';

export const Header = () => {
	const { cartItems } = useContext(CartContext);

	const cartQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

	return (
		<HeaderContainer>
			<div>
				<NavLink to="/">
					<img src={logo} alt="" />
				</NavLink>
				<nav>
					<button className="city">
						<MapPin size={22} weight="fill" />
						<span>Ribeirão Preto - SP</span>
					</button>
					<NavLink to="/checkout">
						<button title="cart" className="cart">
							<ShoppingCart size={22} weight="fill" />
							<span className="badge">
								<span>{cartQuantity}</span>
							</span>
						</button>
					</NavLink>
				</nav>
			</div>
		</HeaderContainer>
	);
};
