import Layout from 'components/Layout';
import Button from 'components/Button';
import Input from 'components/Input';
import styles from './Login.module.css';
import { useComponentLogic } from './hooks';
import { REG_EXP } from 'src/constants/regexp';

const Login = () => {
	const { register, handleSubmit, onSubmit, errors } = useComponentLogic();

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
						<Input
							register={register}
							errors={errors}
							required={{ value: true, message: 'Alamat email harus diisi.' }}
							pattern={{
								value: REG_EXP.email,
								message: 'Gunakan format email dengan benar.',
							}}
							label='Email'
							type='email'
							name='email'
							placeholder='Masukkan alamat email'
							className='mb-6'
						/>

						<Input
							register={register}
							errors={errors}
							required={{ value: true, message: 'Password harus diisi.' }}
							label='Password'
							type='password'
							name='password'
							placeholder='Masukan kata sandi'
						/>
						<a
							href='#'
							className='text-heading-5 text-blue-100 font-semibold mt-8 mb-4 hover:underline'
						>
							Lupa kata sandi?
						</a>

						<Button
							type='submit'
							fullWidth
						>
							Masuk
						</Button>
					</form>

					<p className='text-heading-5 text-gray-70 my-8'>Atau Masuk dengan</p>
					<Button
						className='mb-4'
						variant='google'
					>
						Masuk dengan Google
					</Button>
					<Button variant='facebook'>Masuk dengan Facebook</Button>
				</div>
			</section>
		</Layout>
	);
};

export default Login;
