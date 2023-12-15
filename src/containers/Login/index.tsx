import Layout from 'components/Layout';
import Button from 'components/Button';
import styles from './Login.module.css';

const Login = () => {
	return (
		<Layout noFooter>
			<section className={styles.section}>
				<div className={styles.formWraper}>
					<p className='text-heading-3 font-label font-extrabold'>Masuk</p>

					<div className='flex mt-3'>
						<p className='text-heading-5 text-gray-50 font-semibold'>
							Belum punya akun?
						</p>
						<a
							href='#'
							className='text-heaidng-5 text-blue-100 font-semibold ml-2 hover:underline'
						>
							Daftar disini
						</a>
					</div>

					<form className='flex flex-col mt-8'>
						<input type='email' />
						<input type='password' />

						<Button>Masuk</Button>
					</form>
				</div>
			</section>
		</Layout>
	);
};

export default Login;
