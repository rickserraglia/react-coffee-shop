import * as CoffeeImages from './coffees/';

interface CoffeeItem {
	id: number;
	name: string;
	description: string;
	image: string;
	category: string[];
	price: number;
}

export const coffeesList: CoffeeItem[] = [
	{
		id: 1,
		name: 'Expresso Tradicional',
		description: 'O tradicional café feito com água quente e grãos moídos',
		image: CoffeeImages.expressoTradicional,
		category: ['tradicional'],
		price: 9.9
	},
	{
		id: 2,
		name: 'Expresso Americano',
		description: 'Expresso diluído, menos intenso que o tradicional',
		image: CoffeeImages.expressoAmericano,
		category: ['tradicional'],
		price: 9.9
	},
	{
		id: 3,
		name: 'Expresso Cremoso',
		description: 'Café expresso tradicional com espuma cremosa',
		image: CoffeeImages.expressoCremoso,
		category: ['tradicional'],
		price: 9.9
	},
	{
		id: 4,
		name: 'Expresso Gelado',
		description: 'Bebida preparada com café expresso e cubos de gelo',
		image: CoffeeImages.expressoGelado,
		category: ['tradicional', 'Gelado'],
		price: 9.9
	},
	{
		id: 5,
		name: 'Café com Leite',
		description: 'Meio a meio de expresso tradicional com leite vaporizado',
		image: CoffeeImages.cafeLeite,
		category: ['tradicional', 'com leite'],
		price: 9.9
	},
	{
		id: 6,
		name: 'Latte',
		description:
			'Uma dose de café expresso com o dobro de leite e espuma cremosa',
		image: CoffeeImages.latte,
		category: ['tradicional', 'com leite'],
		price: 9.9
	},
	{
		id: 7,
		name: 'Capuccino',
		description:
			'Bebida com canela feita de doses iguais de café, leite e espuma',
		image: CoffeeImages.capuccino,
		category: ['tradicional', 'com leite'],
		price: 9.9
	},
	{
		id: 8,
		name: 'Macchiato',
		description:
			'Café expresso misturado com um pouco de leite quente e espuma',
		image: CoffeeImages.macchiato,
		category: ['tradicional', 'com leite'],
		price: 9.9
	},
	{
		id: 9,
		name: 'Mocaccino',
		description: 'Café expresso com calda de chocolate, pouco leite e espuma',
		image: CoffeeImages.mocaccino,
		category: ['tradicional', 'com leite'],
		price: 9.9
	},
	{
		id: 10,
		name: 'Chocolate Quente',
		description: 'Bebida feita com chocolate dissolvido no leite quente e café',
		image: CoffeeImages.chocolateQuente,
		category: ['especial', 'com leite'],
		price: 9.9
	},
	{
		id: 11,
		name: 'Cubano',
		description:
			'Drink gelado de café expresso com rum, creme de leite e hortelã',
		image: CoffeeImages.cubano,
		category: ['especial', 'alcoólico', 'gelado'],
		price: 9.9
	},
	{
		id: 12,
		name: 'Havaiano',
		description: 'Bebida adocicada preparada com café e leite de coco',
		image: CoffeeImages.havaiano,
		category: ['especial'],
		price: 9.9
	},
	{
		id: 13,
		name: 'Árabe',
		description: 'Bebida preparada com grãos de café árabe e especiarias',
		image: CoffeeImages.arabe,
		category: ['especial'],
		price: 9.9
	},
	{
		id: 14,
		name: 'Irlandês',
		description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
		image: CoffeeImages.irlandes,
		category: ['especial', 'alcoólico'],
		price: 9.9
	}
];
