import styled from 'styled-components';

export const HeaderContainer = styled.header`
	position: sticky;
	top: 0;
	background: #fff;
	z-index: 100;

	div {
		display: flex;
		align-items: center;
		justify-content: space-between;

		max-width: 118rem;
		margin: auto;

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
			}

			.city {
				background: #ebe5f9;
				color: #4b2995;
				svg {
					color: #8047f8;
				}
			}

			.cart {
				background: #f1e9c9;
				color: #c47f17;
				&:hover {
					opacity: 0.8;
					cursor: pointer;
				}
			}
		}
	}
`;
