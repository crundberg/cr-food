/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useDish, useForm } from 'hooks';
import { ButtonLoading } from 'components/bootstrap';
import './dish.css';

function DishEdit() {
	const { id } = useParams();
	const {
		handleEdit,
		isLoading,
		redirectTo,
		details,
		handleGetById,
	} = useDish();
	const { formData, handleChange } = useForm();

	useEffect(() => {
		handleGetById(id);
	}, [id]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		handleEdit(id, formData);
	};

	if (redirectTo) {
		return <Redirect to={redirectTo} push />;
	}

	return (
		<main className="container">
			<h1>Edit dish</h1>

			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="name" className="form-label">
						Name
					</label>
					<input
						type="text"
						className="form-control"
						name="name"
						defaultValue={details.name}
						onChange={handleChange}
					/>
				</div>

				<ButtonLoading isLoading={isLoading} didSucceeded={false} />
			</form>
		</main>
	);
}

export default DishEdit;
