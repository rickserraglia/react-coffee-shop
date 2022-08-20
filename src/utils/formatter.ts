export const priceFormatter = new Intl.NumberFormat('pt-BR', {
	style: 'currency',
	currency: 'BRL'
});

export const noCurrencyLocaleFormatter = new Intl.NumberFormat('pt-BR', {
	minimumFractionDigits: 2
});
