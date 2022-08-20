import styled from 'styled-components';

export const CoffeeItemContainer = styled.div`
	display: inline-flex;
	flex-direction: column;
	align-items: center;

	text-align: center;

	background: #f3f2f2;
	padding: 1.6rem;

	max-width: 24rem;
	border-radius: 6px 36px;

	position: relative;

	gap: 1.2rem;
	margin-block: 1rem;

	img {
		margin-top: -4rem;
	}

	.badge {
		background-color: #f1e9c9;
		color: #c47f17;
		border-radius: 20px;
		padding: 4px 10px;
		font-size: 1.2rem;
		font-weight: 600;
		text-transform: uppercase;
		margin-inline: 2px;
	}

	footer {
		width: 100%;

		form {
			display: flex;
			align-items: center;
			justify-content: space-around;
			> span {
				color: #574f4d;
				> span {
					font-family: 'Baloo 2', sans-serif;
					font-size: 2.4rem;
					padding-right: 3.2rem;
					color: #574f4d;
				}
			}

			.quantityInput {
				display: inline-flex;
				align-items: center;
				background: #e6e5e5;
				border-radius: 4px;
				font-size: 20px;
				width: 40px;
				padding: 5px 6px;
			}

			.cart {
				outline: none;
				border: none;
				background: #4b2995;
				color: #f3f2f2;
				border-radius: 4px;
				padding: 5px;
				&:hover {
					cursor: pointer;
					opacity: 0.8;
				}
			}
		}
	}
`;
