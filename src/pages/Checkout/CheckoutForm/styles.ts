import styled from 'styled-components';
import * as RadioGroup from '@radix-ui/react-radio-group';

export const CheckoutFormContainer = styled.form`
	margin-top: 4rem;

	display: flex;
	flex-direction: row;
	gap: 3.2rem;
`;

export const CheckoutFormInputs = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	padding-bottom: 5rem;
	gap: 12px;

	> div {
		background: ${(props) => props.theme.card};
		padding: 4rem;
		border-radius: 1rem;

		header {
			display: flex;
			gap: 0.8rem;
			padding-bottom: 3.2rem;

			h3 {
				font-size: 1.8rem;
			}

			p {
				font-size: 1.4rem;
			}

			p.form-title {
				font-size: 1.6rem;
				padding-block: 2px;
			}
		}
		> div {
			width: 100%;
			display: flex;
			flex-flow: row wrap;
			gap: 1.6rem;

			input[type='text'] {
				padding: 1.2rem;
				border-radius: 4px;
				background: ${(props) => props.theme.input};
				color: ${(props) => props.theme.text};
				border: 1px solid ${(props) => props.theme.button};
			}
			input[placeholder='Rua'] {
				width: 100%;
			}
			input[placeholder='Cidade'] {
				flex: 1;
			}
			input[placeholder='UF'] {
				width: 10%;
			}
			.input-group {
				flex: 1;
				min-width: 50%;
				position: relative;
			}
			.input-group span {
				position: absolute;
				top: 50%;
				right: 10px;
				transform: translateY(-50%);
				color: ${(props) => props.theme.label};
				font-style: italic;
				font-size: 1.2rem;
			}
			input[placeholder='Complemento'] {
				width: 100%;
			}
		}
	}
`;

export const CheckoutItemsResume = styled.div`
	min-width: 35rem;

	> div {
		margin-block: 2rem;
		padding: 2rem;
		background: ${(props) => props.theme.card};
		border-radius: 1rem 2rem;
	}

	.pricing-area {
		padding-block: 2.4rem;
		display: flex;
		flex-direction: column;
		gap: 1.2rem;
	}

	.pricing {
		display: flex;
		justify-content: space-between;
		font-size: 1.4rem;
	}

	.pricing[data-type='total'] {
		font-size: 2rem;
		font-weight: 700;
	}

	button[type='submit'] {
		width: 100%;
		border: none;
		background: ${(props) => props.theme.yellow};
		color: ${(props) => props.theme.white};
		padding: 1.2rem;
		border-radius: 6px;
		font-size: 1.4rem;
		font-weight: 700;
		text-transform: uppercase;
		transition: background-color 0.2s;
		cursor: pointer;
		&:disabled {
			opacity: 0.8;
			cursor: not-allowed;
		}
		&:not(:disabled):hover {
			background: ${(props) => props.theme['yellow-dark']};
		}
	}
`;

export const PaymentType = styled(RadioGroup.Root)`
	display: flex;
	gap: 1rem;
	margin-top: 0.5rem;
	width: 100%;

	&:focus {
		box-shadow: none;
	}
`;

interface PaymentTypeButtonProps {
	variant: 'credit' | 'debit' | 'cash';
}

export const PaymentTypeButton = styled(
	RadioGroup.Item
)<PaymentTypeButtonProps>`
	flex: 1;
	min-width: 180px;
	background: ${(props) => props.theme.button};
	padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	border-radius: 6px;
	cursor: pointer;
	border: 1px solid transparent;
	color: ${(props) => props.theme.text};
	transition: background-color 0.2s;
	svg {
		color: ${(props) => props.theme.purple};
	}
	&[data-state='unchecked']:hover {
		background: ${(props) => props.theme.hover};
	}
	&[data-state='checked'] {
		background: ${(props) => props.theme['purple-light']};
		border-color: ${(props) => props.theme.purple};
	}
`;
