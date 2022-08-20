import { HomeContainer } from './styles';
import hero from '../../assets/hero.svg';
import { CoffeeItem } from './components/CoffeeItem';
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import * as CoffeeImages from '../../assets/coffees/';

export const Home = () => {
	const menuItems = [
		{
			id: 1,
			name: 'Expresso Tradicional',
			description: 'O tradicional café feito com água quente e grãos moídos',
			image: CoffeeImages.expressoTradicional,
			category: ['Tradicional'],
			price: '9,90'
		},
		{
			id: 2,
			name: 'Expresso Americano',
			description: 'Expresso diluído, menos intenso que o tradicional',
			image: CoffeeImages.expressoAmericano,
			category: ['Tradicional'],
			price: '9,90'
		},
		{
			id: 3,
			name: 'Expresso Cremoso',
			description: 'Café expresso tradicional com espuma cremosa',
			image: CoffeeImages.expressoCremoso,
			category: ['Tradicional'],
			price: '9,90'
		},
		{
			id: 4,
			name: 'Expresso Gelado',
			description: 'Bebida preparada com café expresso e cubos de gelo',
			image: CoffeeImages.expressoGelado,
			category: ['Tradicional', 'Gelado'],
			price: '9,90'
		},
		{
			id: 5,
			name: 'Café com Leite',
			description: 'Meio a meio de expresso tradicional com leite vaporizado',
			image: CoffeeImages.cafeLeite,
			category: ['Tradicional', 'com leite'],
			price: '9,90'
		}
	];

	return (
		<HomeContainer>
			<section className="hero">
				<div className="text-container">
					<h1>Encontre o café perfeito para qualquer hora do dia</h1>
					<p>
						Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
						hora
					</p>
					<ul>
						<li>
							<span>
								<ShoppingCart />
							</span>
							<span>Compra simples e Segura</span>
						</li>
						<li>
							<span>
								<Package />
							</span>
							<span>Embalagem mantém o café intacto</span>
						</li>
						<li>
							<span>
								<Timer />
							</span>
							<span>Entrega rápida e rastreada</span>
						</li>
						<li>
							<span>
								<Coffee />
							</span>
							<span>O café chega fresquinho até você</span>
						</li>
					</ul>
				</div>
				<img src={hero} alt="" />
			</section>
			<section className="coffees">
				<h2>Nossos Cafés</h2>
				<div className="coffeeListing">
					{menuItems.map((item) => (
						<CoffeeItem
							key={item.id}
							image={item.image}
							name={item.name}
							text={item.description}
							category={item.category}
							price={item.price}
						/>
					))}
				</div>
			</section>
		</HomeContainer>
	);
};
