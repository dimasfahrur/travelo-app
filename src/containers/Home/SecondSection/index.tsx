import React from 'react';
import Container from 'components/Container';
import PromoCaraousel from './PromoCaraousel';
import Packages from './Packages';

import styles from './SecondSection.module.css';
import 'react-multi-carousel/lib/styles.css';

const SecondSection = () => {
	return (
		<section className={styles.section}>
			<Container>
				<PromoCaraousel />
				<Packages />
			</Container>
		</section>
	);
};

export default SecondSection;
