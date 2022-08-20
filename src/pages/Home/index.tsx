import { CoffeeListContainer, HeroContainer, HomeContainer } from './styles';
import hero from '../../assets/hero.svg';
import { CoffeeItem } from './components/CoffeeItem';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { coffeesList } from '../../assets/coffeesList';

export const Home = () => {
	return (
		<HomeContainer>
			<HeroContainer>
				<div className="text-container">
					<h1>Encontre o café perfeito para qualquer hora do dia</h1>
					<p>
						Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
						hora
					</p>
					<ul>
						<li>
							<span>
								<ShoppingCart size={16} weight="fill" />
							</span>
							<span>Compra simples e Segura</span>
						</li>
						<li>
							<span>
								<Package size={16} weight="fill" />
							</span>
							<span>Embalagem mantém o café intacto</span>
						</li>
						<li>
							<span>
								<Timer size={16} weight="fill" />
							</span>
							<span>Entrega rápida e rastreada</span>
						</li>
						<li>
							<span>
								<Coffee size={16} weight="fill" />
							</span>
							<span>O café chega fresquinho até você</span>
						</li>
					</ul>
				</div>
				<img src={hero} alt="" />
			</HeroContainer>
			<CoffeeListContainer>
				<h2>Nossos Cafés</h2>
				<div className="listing-area">
					{coffeesList.map((item) => (
						<CoffeeItem
							key={item.id}
							id={item.id}
							image={item.image}
							name={item.name}
							text={item.description}
							category={item.category}
							price={item.price}
						/>
					))}
				</div>
			</CoffeeListContainer>
		</HomeContainer>
	);
};
