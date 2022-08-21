import { zodResolver } from '@hookform/resolvers/zod';
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from 'phosphor-react';
import { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as z from 'zod';

import { CartContext } from '../../../context/CartContext';
import { priceFormatter } from '../../../utils/formatter';
import { CartItem } from './components/CartItem';
import { CheckoutFormContainer, CheckoutFormInputs, CheckoutItemsResume, PaymentType, PaymentTypeButton } from './styles';

const checkoutFormSchema = z.object({
	cep: z.string(),
	street: z.string(),
	number: z.string(),
	extraAddress: z.string(),
	area: z.string(),
	city: z.string(),
	state: z.string(),
	payment: z.enum(['credit', 'debit', 'cash'])
});

type CheckoutFormInputsType = z.infer<typeof checkoutFormSchema>;

export const CheckoutForm = () => {
	const { cartItems, resetCart } = useContext(CartContext);
	const navigate = useNavigate();

	const subTotal = cartItems.reduce((acc, item) => {
		return item.price * item.quantity + acc;
	}, 0);

	const deliveryFee = 3.5;
	const total = deliveryFee + subTotal;

	const {
		control,
		register,
		handleSubmit,
		formState: { isSubmitting },
		reset
	} = useForm<CheckoutFormInputsType>({
		resolver: zodResolver(checkoutFormSchema)
	});

	const submitCheckoutForm = (data: CheckoutFormInputsType) => {
		// console.log(data);
		// actions before reset
		reset();
		resetCart();
		navigate('done');
	};

	return (
		<CheckoutFormContainer onSubmit={handleSubmit(submitCheckoutForm)}>
			<CheckoutFormInputs>
				<h3>Complete seu pedido</h3>
				<div>
					<header>
						<span className="icon">
							<MapPinLine size={22} color="#C47F17" />
						</span>
						<div className="title">
							<p className="form-title">Endereço de Entrega</p>
							<p>Informe o Endereço onde deseja receber seu pedido</p>
						</div>
					</header>
					<div>
						<input type="text" placeholder="CEP" {...register('cep')} />
						<input type="text" placeholder="Rua" {...register('street')} />
						<input type="text" placeholder="Número" {...register('number')} />
						<div className="input-group">
							<input
								type="text"
								placeholder="Complemento"
								{...register('extraAddress')}
							/>
							<span>Opcional</span>
						</div>
						<input type="text" placeholder="Bairro" {...register('area')} />
						<input type="text" placeholder="Cidade" {...register('city')} />
						<input type="text" placeholder="UF" {...register('state')} />
					</div>
				</div>
				<div>
					<header>
						<span className="icon">
							<CurrencyDollar size={22} color="#8047F8" />
						</span>
						<div className="title">
							<p className="form-title">Pagamento</p>
							<p>
								O pagamento é feito na entrega. Escolha a forma que deseja pagar
							</p>
						</div>
					</header>

					<Controller
						control={control}
						name="payment"
						// eslint-disable-next-line react-perf/jsx-no-new-function-as-prop
						render={({ field }) => {
							return (
								<PaymentType onValueChange={field.onChange} value={field.value}>
									<PaymentTypeButton variant="credit" value="credit">
										<CreditCard size={20} /> Cartão de Crédito
									</PaymentTypeButton>
									<PaymentTypeButton variant="debit" value="debit">
										<Bank size={20} /> Cartão de Débito
									</PaymentTypeButton>
									<PaymentTypeButton variant="cash" value="cash">
										<Money size={20} /> Dinheiro
									</PaymentTypeButton>
								</PaymentType>
							);
						}}
					/>
				</div>
			</CheckoutFormInputs>
			<CheckoutItemsResume>
				<h3>Cafés Selecionados</h3>
				<div>
					{cartItems.map((item) => {
						return <CartItem key={item.id} item={item} />;
					})}
					{cartItems.length === 0 ? (
						<p>O seu carrinho está vazio</p>
					) : (
						<div className="pricing-area">
							<div className="pricing">
								<p>Subtotal</p> <span>{priceFormatter.format(subTotal)}</span>
							</div>
							<div className="pricing">
								<p>Entrega</p> <span>{priceFormatter.format(deliveryFee)}</span>
							</div>
							<div className="pricing" data-type="total">
								<p>Total</p> <span>{priceFormatter.format(total)}</span>
							</div>
							<button type="submit" disabled={isSubmitting}>
								Confirmar Pedido
							</button>
						</div>
					)}
				</div>
			</CheckoutItemsResume>
		</CheckoutFormContainer>
	);
};
