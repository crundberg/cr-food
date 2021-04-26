/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useReducer } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from 'hooks';

const formReducer = (state, event) => {
	return {
		...state,
		[event.name]: event.value,
	};
};

function Auth() {
	const { redirectTo, handleLogin } = useAuth();
	const [formData, setFormData] = useReducer(formReducer, {});

	if (redirectTo) {
		return <Redirect to={redirectTo} />;
	}

	const onChange = (e) => {
		setFormData({
			name: e.target.name,
			value: e.target.value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const { username, password } = formData;
		handleLogin(username, password, '/');
	};

	return (
		<main className="form-signin">
			<form onSubmit={onSubmit}>
				<h1 className="h3 mb-3 fw-normal">Please sign in</h1>
				<label htmlFor="username" className="visually-hidden">
					Username
				</label>
				<input
					type="text"
					name="username"
					className="form-control"
					placeholder="Username"
					required
					onChange={onChange}
				/>
				<label htmlFor="password" className="visually-hidden">
					Password
				</label>
				<input
					type="password"
					name="password"
					className="form-control"
					placeholder="Password"
					required
					onChange={onChange}
				/>
				<button className="w-100 btn btn-lg btn-primary" type="submit">
					Sign in
				</button>
			</form>
		</main>
	);
}

export default Auth;
