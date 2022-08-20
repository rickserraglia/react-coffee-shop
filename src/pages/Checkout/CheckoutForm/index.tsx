import { CurrencyDollar, MapPinLine } from 'phosphor-react';
import {
	CheckoutContainer,
	CheckoutFormInputs,
	CheckoutItemsResume
} from './styles';

export const CheckoutForm = () => {
	return (
		<CheckoutContainer>
			<form action="#">
				<CheckoutFormInputs>
					<h3>Complete seu pedido</h3>
					<div>
						<header>
							<span className="icon">
								<MapPinLine size={22} color="#C47F17" />
							</span>
							<div className="title">
								<h4>Endereço de Entrega</h4>
								<p>Informe o Endereço onde deseja receber seu pedido</p>
							</div>
						</header>
						<div>
							<input type="text" placeholder="CEP" />
							<input type="text" placeholder="Rua" />
							<input type="text" placeholder="Número" />
							<input type="text" placeholder="Complemento" />
							<input type="text" placeholder="Bairro" />
							<input type="text" placeholder="Cidade" />
							<input type="text" placeholder="UF" />
						</div>
					</div>
					<div>
						<header>
							<span className="icon">
								<CurrencyDollar size={22} color="#8047F8" />
							</span>
							<div className="title">
								<h4>Pagamento</h4>
								<p>
									O pagamento é feito na entrega. Escolha a forma que deseja
									pagar
								</p>
							</div>
						</header>
						<div>
							<label>
								Cartão de Crédito
								<input type="radio" name="payment" value="credit" />
							</label>
							<label>
								Cartão de Débito
								<input type="radio" name="payment" value="debit" />
							</label>
							<label>
								Dinheiro
								<input type="radio" name="payment" value="cash" />
							</label>
						</div>
					</div>
				</CheckoutFormInputs>
				<CheckoutItemsResume>
					<h3>Cafés Selecionados</h3>
					<div>
						<p>...List...</p>
						<hr />
						<div className="pricing">
							<p>Subtotal</p> <span>R$ 29,70</span>
						</div>
						<div className="pricing">
							<p>Entrega</p> <span>R$ 3,50</span>
						</div>
						<div className="pricing">
							<p>Total</p> <span>R$ 33,20</span>
						</div>
						<button type="submit">Confirmar Pedido</button>
					</div>
				</CheckoutItemsResume>
			</form>
		</CheckoutContainer>
	);
};
