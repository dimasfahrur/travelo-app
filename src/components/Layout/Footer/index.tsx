import Image from 'next/image';
import Container from 'components/Container';
import FooterInfo from './FooterInfo';
import styles from './Footer.module.css';
import traveloLogo from 'public/assets/travelo-logo-footer.png';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Container size='lg'>
				<div className='flex bg-white p-16'>
					<figure>
						<Image
							src={traveloLogo}
							alt='Travelo Logo'
							placeholder='blur'
							height='98'
							width='136'
						/>
					</figure>
					<div className='flex flex-1 justify-between ml-[106px]'>
						<FooterInfo
							title='Info'
							content={[
								{
									label: 'Tentang Kami',
									href: '/',
								},
								{
									label: 'Testimonial',
									href: '/',
								},
								{
									label: 'Kontak',
									href: '/',
								},
							]}
						/>

						<FooterInfo
							title='Perusahaan'
							content={[
								{
									label: 'Syarat & Ketentuan',
									href: '/',
								},
								{
									label: 'Kebijakan Privasi',
									href: '/',
								},
								{
									label: 'Blog',
									href: '/',
								},
								{
									label: 'Bantuan Pelayanan',
									href: '/',
								},
							]}
						/>
						<FooterInfo
							title='Kontak'
							content={[
								'Jl. Dago No 1A',
								'Bandung, Jawa Barat',
								'Indonesia',
								'(022)808080',
								'contact@gmail.com',
							]}
						/>
					</div>
				</div>
			</Container>

			<div className='div bg-blue-100 p-3'>
				<p className='p text-heading-5 text-white font-bold text-center'>
					Copyright 2020 Nama Brand. All Right Reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
