import styled from 'styled-components';

export const CheckoutSuccessContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: space-between;
	width: 100%;

	.imageBox {
		max-width: 45rem;
	}

	> div {
		display: flex;
		flex-direction: column;
		flex: 1;
		h3 {
			font-size: 3.2rem;
			color: #c47f17;
		}

		p {
			font-size: 2rem;
		}

		> .box {
			margin-top: 4rem;
			padding: 4rem;

			max-width: 45rem;

			background: linear-gradient(#fff, #fff) padding-box,
				linear-gradient(135deg, #dbac2c, #8047f8) border-box;
			border-radius: 1rem 4rem;
			border: 1px solid transparent;

			flex: 1;

			> div {
				display: flex;
				gap: 1rem;
				align-items: center;
			}
		}
	}
`;
