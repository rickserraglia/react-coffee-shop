import styled from 'styled-components';

export const HeaderContainer = styled.header`
	position: sticky;
	top: 0;
	background: ${(props) => props.theme.background};
	z-index: 100;

	div {
		display: flex;
		align-items: center;
		justify-content: space-between;

		max-width: 116rem;
		margin: auto;
		padding: 1.6rem 4rem;

		width: 100%;
		padding-block: 2rem;

		a {
			display: inline-flex;
			align-items: center;
			justify-content: center;
		}

		nav {
			display: flex;
			align-items: center;
			gap: 12px;

			button {
				display: flex;
				align-items: center;
				gap: 2px;
				border-radius: 4px;
				background: red;
				border: none;
				outline: none;
				padding: 6px;
				position: relative;

				.badge {
					position: absolute;
					top: -8px;
					right: -12px;
					font-size: 14px;
					font-weight: 700;
					padding: 2px 6px;
					border-radius: 50px;
					text-decoration: none;
					color: ${(props) => props.theme.white};
					background: red;
				}
			}

			.city {
				background: ${(props) => props.theme['purple-light']};
				color: ${(props) => props.theme['purple-dark']};
				svg {
					color: ${(props) => props.theme.purple};
				}
			}

			.cart {
				background: ${(props) => props.theme['yellow-light']};
				color: ${(props) => props.theme['yellow-dark']};
				&:hover {
					opacity: 0.8;
					cursor: pointer;
				}
			}
		}
	}
`;
