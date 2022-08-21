import styled from 'styled-components';
import heroBg from '../../assets/hero-bg.png';

export const StoreLayoutContainer = styled.div`
	max-width: 112rem;
	margin: auto;
	border-radius: 8px;
	display: flex;
	flex-direction: column;

	&::before {
		content: '';
		position: absolute;
		inset: 0;
		background-size: contain;
		background-repeat: no-repeat;
		background-image: url(${heroBg});
		z-index: 0;
	}
`;
