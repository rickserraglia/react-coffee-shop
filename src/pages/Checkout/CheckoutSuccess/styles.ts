import styled from 'styled-components';

export const CheckoutSuccessContainer = styled.div`
	padding-top: 8rem;

	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: space-between;
	width: 100%;

	.imageBox,
	.text-area {
		display: flex;
		flex-direction: column;
	}

	.imageBox {
		max-width: 45rem;
	}

	.text-area {
		flex: 1;
		h3 {
			font-size: 3.2rem;
			font-weight: 800;
			color: ${(props) => props.theme['yellow-dark']};
			padding-bottom: 4px;
		}

		p {
			font-size: 2rem;
		}
	}
`;

export const GradientBoxContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 32px;

	margin-top: 4rem;
	padding: 4rem;

	max-width: 45rem;

	background: linear-gradient(
				${(props) => props.theme.white},
				${(props) => props.theme.white}
			)
			padding-box,
		linear-gradient(
				135deg,
				${(props) => props.theme.yellow},
				${(props) => props.theme.purple}
			)
			border-box;
	border-radius: 1rem 4rem;
	border: 1px solid transparent;

	> div {
		display: flex;
		gap: 12px;
		align-items: center;

		> div > p {
			font-size: 16px !important;
		}

		> svg:first-child {
			border-radius: 50%;
			padding: 8px;
			color: ${(props) => props.theme.white};
		}
	}

	> div:nth-child(1) > svg {
		background-color: ${(props) => props.theme.purple};
	}
	> div:nth-child(2) > svg {
		background-color: ${(props) => props.theme.yellow};
	}
	> div:nth-child(3) > svg {
		background-color: ${(props) => props.theme['yellow-dark']};
	}
`;
