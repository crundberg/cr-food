import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDish } from 'hooks';
import './dish.css';

function DishView() {
	const { id } = useParams();
	const { details, handleGetById } = useDish();
	const { name } = details;

	useEffect(() => {
		handleGetById(id);
	}, [id]);

	return (
		<main className="container">
			<h1>{name}</h1>
		</main>
	);
}

export default DishView;
