import clsx from 'clsx';
import styles from './Input.module.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import { InputProps } from './interfaces';

const Input = ({
	name,
	type,
	label,
	placeholder,
	className,
	register,
	errors,
	required,
	pattern,
}: InputProps) => {
	const [hidePassword, setHidePassword] = useState(false);
	const [inputType, setInputType] = useState(type);
	const isInputError = errors && errors[name];
	const inputErrorHint = `${name}-input-error-hint`;

	const handleEyeClick = () => {
		setHidePassword((prevState) => !prevState);
		if (type === 'password' && !hidePassword) {
			setInputType('text');
		} else {
			setInputType('password');
		}
	};

	return (
		<label
			htmlFor={name}
			className={clsx(styles.label, className)}
		>
			<div className='mb-3'>{label}</div>
			<input
				{...register(name, {
					required,
					pattern,
				})}
				formNoValidate
				className={clsx(styles.input, isInputError && styles.inputError)}
				type={inputType}
				id={name}
				placeholder={placeholder}
				aria-describedby={inputErrorHint}
			/>

			{type === 'password' ? (
				<button
					type='button'
					className={clsx(styles.eye, isInputError && styles.eyeError)}
					onClick={handleEyeClick}
				>
					{hidePassword ? (
						<FaEyeSlash className='h-6 w-6 text-gray-100' />
					) : (
						<FaEye className='h-6 w-6 text-gray-100' />
					)}
				</button>
			) : null}

			{isInputError ? (
				<span
					id={inputErrorHint}
					className='text-xs text-red-100 mt-1 ml-3'
				>
					{errors[name].message}
				</span>
			) : null}
		</label>
	);
};

export default Input;
