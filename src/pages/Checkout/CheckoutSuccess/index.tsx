import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { CheckoutSuccessContainer } from './styles';
import CheckoutDoneIllustration from '../../../assets/checkout-done.svg';

export const CheckoutSuccess = () => {
	return (
		<CheckoutSuccessContainer>
			<div>
				<h3>Uhu! Pedido Confirmado</h3>
				<p>Agora é só aguardar que logo o café chegará até você</p>
				<div className="box">
					<div>
						<MapPin size={32} />
						<div>
							<p>Entrega em ...</p>
							<p>Ribeirão Preto - SP</p>
						</div>
					</div>
					<div>
						<Timer size={32} />
						<div>
							<p>Previsão de entrega</p>
							<p>20 min - 30 min</p>
						</div>
					</div>
					<div>
						<CurrencyDollar size={32} />
						<div>
							<p>Pagamento na entrega</p>
							<p>Cartão de Crédito</p>
						</div>
					</div>
				</div>
			</div>
			<div className="imageBox">
				<img src={CheckoutDoneIllustration} alt="" />
			</div>
		</CheckoutSuccessContainer>
	);
};
