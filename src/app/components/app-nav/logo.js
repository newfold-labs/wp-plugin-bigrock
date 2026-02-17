import { Title } from '@newfold/ui-component-library';

import { delay } from 'lodash';
import { ReactComponent as BRLogo } from '../../../../assets/svg/bigrock.svg';

const Mark = () => {
	const defocus = () => {
		const button = document.querySelector( '.logo-mark' );
		delay( () => {
			if ( null !== button ) {
				button.blur();
			}
		}, 500 );
	};

	const brandLogo = () => {
		return <BRLogo className="wppbr-logo" />
	}

	return (
		<a
			className="logo-mark"
			style={ { display: 'block', width: '160px', height: 'auto' } }
			onMouseUp={ defocus }
			href="#/home"
		>
			{brandLogo()}
		</a>
	);
};

const Logo = () => {
	return (
		<div className="wppbr-logo-wrap" style={ { paddingTop: '12px', paddingBottom: '12px' } }>
			<Mark />
			<Title as="h2" className="screen-reader-text">
				{ __( 'Web WordPress Plugin', 'wp-plugin-bigrock' ) }
			</Title>
		</div>
	);
};

export default Logo;
