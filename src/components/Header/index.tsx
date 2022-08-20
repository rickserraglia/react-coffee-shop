import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { HeaderContainer } from './styles';

export const Header = () => {
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
						</button>
					</NavLink>
				</nav>
			</div>
		</HeaderContainer>
	);
};
