/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useDish, useForm } from 'hooks';
import { ButtonLoading } from 'components/bootstrap';
import './dish.css';

function DishAdd() {
	const { handleAdd, isLoading, redirectTo } = useDish();
	const { formData, handleChange } = useForm();

	if (redirectTo) {
		return <Redirect to={redirectTo} />;
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		handleAdd(formData);
	};

	return (
		<main className="container">
			<h1>Add dish</h1>

			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="name" className="form-label">
						Name
					</label>
					<input
						type="text"
						className="form-control"
						name="name"
						onChange={handleChange}
					/>
				</div>

				<ButtonLoading isLoading={isLoading} />
			</form>
		</main>
	);
}

export default DishAdd;
