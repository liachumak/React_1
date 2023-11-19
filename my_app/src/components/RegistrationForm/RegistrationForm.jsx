import { useState } from 'react';
import './registrationForm.css';

const RegistrationForm = () => {
	const [formData, setFormData] = useState({
		email: '',
		username: '',
		password: '',
		age: '',
	});

const [error, setError] = useState('');

const handleChange = (e) => {
	const { name, value } = e.target;
	setFormData({ ...formData, [name]: value });
	}

const handleSubmit = (e) => {
	e.preventDefault();
		for(const key in formData) {
			if(formData[key].trim() === ''){
				setError(`Missing information in the ${key} field`);
				return;
			}
		}

    console.log(formData);

		setFormData({
			email: '',
			username: '',
			password: '',
			age: '',
		});
		setError('');
	}

	return (
		<div className='registration'>
			<form onSubmit={handleSubmit}>
				<h2>Registration</h2>
				<label>Email</label>
				<input 
					type="email" 
					name='email' 
					value={formData.email}
					onChange={handleChange} />
				<label>Username</label>
				<input 
					type="text"
					name='username'
					value={formData.username}
					onChange={handleChange} />
				<label>Password</label>
				<input 
					type="password"
					name='password'
					value={formData.password}
					onChange={handleChange} />
				<label>Age</label>
				<input 
					type="number"
					name='age'
					value={formData.age}
					onChange={handleChange} />
				<button type='submit'>Submit</button>
			</form>
			{error && <p>{error}</p>}
		</div>
	);
}

export default RegistrationForm;