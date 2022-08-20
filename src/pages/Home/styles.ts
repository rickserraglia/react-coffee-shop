import styled from 'styled-components';

export const HomeContainer = styled.main`
	display: flex;
	flex-direction: column;
`;

export const HeroContainer = styled.section`
	display: flex;
	justify-content: space-between;
	gap: 5rem;

	padding-block: 8rem;
	position: relative;

	img {
		width: 40%;
	}

	.text-container {
		h1 {
			font-size: 4.8rem;
			padding-bottom: 1rem;
			color: ${(props) => props.theme.title};
		}

		p {
			font-size: 2.2rem;
			padding-bottom: 5rem;
			color: ${(props) => props.theme.subtitle};
		}

		ul {
			display: flex;
			flex-flow: row wrap;
			justify-content: space-between;
			color: ${(props) => props.theme.text};
			width: 100%;

			> li {
				width: 50%;
				padding-block: 1rem;
			}

			> li span:first-child {
				display: inline-flex;
				padding: 8px;
				border-radius: 50%;
				margin-right: 12px;
				svg {
					color: ${(props) => props.theme.background};
				}
			}

			> li:nth-child(1) span:first-child {
				background: ${(props) => props.theme['yellow-dark']};
			}
			> li:nth-child(2) span:first-child {
				background: ${(props) => props.theme.text};
			}
			> li:nth-child(3) span:first-child {
				background: ${(props) => props.theme.yellow};
			}
			> li:nth-child(4) span:first-child {
				background: ${(props) => props.theme.purple};
			}
		}
	}
`;

export const CoffeeListContainer = styled.section`
	h2 {
		padding-bottom: 3rem;
	}
	.listing-area {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		gap: 3.2rem;
	}
`;
