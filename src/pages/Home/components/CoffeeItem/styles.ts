import styled from 'styled-components';

export const CoffeeItemContainer = styled.div`
	display: inline-flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	background: ${(props) => props.theme.card};
	padding: 0 2.4rem 2rem;
	max-width: 24rem;
	border-radius: 6px 36px;
	position: relative;

	img {
		margin-top: -20px;
		padding-bottom: 12px;
	}

	h3 {
		font-size: 2rem;
		padding-top: 16px;
		padding-bottom: 8px;
	}

	p {
		font-size: 1.4rem;
		padding-bottom: 30px;
	}

	.badge {
		background-color: ${(props) => props.theme['yellow-light']};
		color: ${(props) => props.theme['yellow-dark']};
		border-radius: 20px;
		padding: 4px 8px;
		font-size: 1rem;
		font-weight: bold;
		text-transform: uppercase;
		margin-inline: 1px;
	}

	footer {
		width: 100%;

		form {
			display: flex;
			align-items: center;
			justify-content: space-between;
			> span {
				color: ${(props) => props.theme.text};
				> span {
					font-family: 'Baloo 2', cursive;
					font-size: 2.4rem;
					color: ${(props) => props.theme.text};
				}
			}

			div {
				display: flex;
				justify-content: flex-end;
				flex: 1;
				gap: 8px;
			}

			.quantityInput {
				display: inline-flex;
				align-items: center;
				background: ${(props) => props.theme.button};
				border: none;
				border-radius: 4px;
				font-size: 16px;
				width: 60px;
				padding: 5px 6px;
			}

			.cart {
				display: inline-flex;
				justify-content: center;
				align-items: center;

				outline: none;
				border: none;
				background: ${(props) => props.theme['purple-dark']};
				color: ${(props) => props.theme.card};
				border-radius: 6px;
				padding: 8px;
				&:hover {
					cursor: pointer;
					background: ${(props) => props.theme.purple};
				}
			}
		}
	}
`;
