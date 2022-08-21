import { CurrencyDollar, MapPin, Timer } from 'phosphor-react';
import { CheckoutSuccessContainer, GradientBoxContainer } from './styles';
import CheckoutDoneIllustration from '../../../assets/checkout-done.svg';

export const CheckoutSuccess = () => {
	return (
		<CheckoutSuccessContainer>
			<div className="text-area">
				<h3>Uhu! Pedido Confirmado</h3>
				<p>Agora é só aguardar que logo o café chegará até você</p>
				<GradientBoxContainer>
					<div>
						<MapPin size={32} weight="fill" />
						<div>
							<p>
								Entrega em <strong>Rua Xxxxx Xxxxxx, 999</strong>
							</p>
							<p>Bairro - Ribeirão Preto - SP</p>
						</div>
					</div>
					<div>
						<Timer size={32} weight="fill" />
						<div>
							<p>Previsão de entrega</p>
							<p>
								<strong>20 min - 30 min</strong>
							</p>
						</div>
					</div>
					<div>
						<CurrencyDollar size={32} weight="fill" />
						<div>
							<p>Pagamento na entrega</p>
							<p>
								<strong>Cartão de Crédito</strong>
							</p>
						</div>
					</div>
				</GradientBoxContainer>
			</div>
			<div className="imageBox">
				<img src={CheckoutDoneIllustration} alt="" />
			</div>
		</CheckoutSuccessContainer>
	);
};
