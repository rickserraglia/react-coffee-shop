import styled from 'styled-components';

export const CartItemContainer = styled.div`
	display: flex;

	border-bottom: 2px solid ${(props) => props.theme.button};
	padding-block: 2.4rem;

	> img {
		max-width: 64px;
	}
	> div {
		padding-inline: 10px;
		flex: 1;
		display: flex;
		flex-direction: column;
		color: ${(props) => props.theme.subtitle};
		> div {
			display: flex;
			width: 100%;
			gap: 5px;
			> button {
				display: flex;
				justify-content: center;
				align-items: center;
				gap: 4px;
				background: ${(props) => props.theme.button};
				border: none;
				border-radius: 6px;
				font-size: 1.2rem;
				text-transform: uppercase;
				padding: 1rem;
				svg {
					color: ${(props) => props.theme.purple};
				}
				&:hover {
					cursor: pointer;
					background: ${(props) => props.theme.hover};
				}
			}
			> input {
				background: ${(props) => props.theme.button};
				border: none;
				border-radius: 6px;
				padding: 1rem;
				max-width: 55px;
				font-size: 1.6rem;
				&:focus {
					box-shadow: 0 0 0 1px ${(props) => props.theme.purple};
				}
			}
		}
	}
	> span {
		font-weight: bold;
		padding-left: 20px;
	}
`;
