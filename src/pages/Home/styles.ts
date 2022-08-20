import styled from 'styled-components';

export const HomeContainer = styled.main`
	display: flex;
	flex-direction: column;

	.hero {
		display: flex;
		justify-content: space-between;
		gap: 8rem;

		padding-block: 8rem;
		position: relative;

		.text-container > h1 {
			font-size: 4.8rem;
			padding-bottom: 1rem;
			color: #272221;
		}
		.text-container > p {
			font-size: 2.1rem;
			padding-bottom: 5rem;
			color: #403937;
		}

		ul {
			display: flex;
			flex-flow: row wrap;
			justify-content: space-between;
			color: #574f4d;
			width: 100%;

			> li {
				width: 50%;
				padding-block: 1rem;
			}

			> li span:first-child {
				display: inline-flex;
				padding: 1rem;
				border-radius: 50%;
				background-color: red;
				margin-right: 1rem;
				svg {
					color: #fafafa;
				}
			}

			> li:nth-child(1) span:first-child {
				background: #c47f17;
			}
			> li:nth-child(2) span:first-child {
				background: #574f4d;
			}
			> li:nth-child(3) span:first-child {
				background: #dbac2c;
			}
			> li:nth-child(4) span:first-child {
				background: #8047f8;
			}
		}
	}

	.coffees {
		h2 {
			padding-bottom: 3rem;
		}
		.coffeeListing {
			display: flex;
			flex-flow: row wrap;
			align-items: center;
			gap: 3rem;
		}
	}
`;
