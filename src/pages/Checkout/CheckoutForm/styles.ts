import styled from 'styled-components';

export const CheckoutContainer = styled.form`
	margin-top: 4rem;

	form {
		display: flex;
		flex-direction: row;
		gap: 2rem;
	}

	h3 {
		font-size: 1.8rem;
	}

	p {
		font-size: 1.4rem;
	}
`;

export const CheckoutFormInputs = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;

	> div {
		background: #f3f2f2;
		margin-block: 2rem;
		padding: 4rem;
		border-radius: 1rem;

		header {
			display: flex;
			gap: 1rem;
		}
	}
`;

export const CheckoutItemsResume = styled.div`
	min-width: 35rem;

	> div {
		margin-block: 2rem;
		padding: 2rem;
		background: #f3f2f2;
		border-radius: 1rem 2rem;
	}

	.pricing {
		display: flex;
		justify-content: space-between;
	}

	button[type='submit'] {
		width: 100%;
	}
`;
