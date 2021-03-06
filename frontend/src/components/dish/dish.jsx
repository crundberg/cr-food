import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDish } from 'hooks';
import DishTableHeader from './dishTableHeader';
import DishTableRow from './dishTableRow';
import './dish.css';

function Dish() {
	const { items, handleGet } = useDish();

	useEffect(() => {
		handleGet();
	}, []);

	return (
		<main className="container">
			<h1>Dishes</h1>

			<Link to="/dish/add" className="btn btn-primary">
				Add
			</Link>

			<table className="table table-striped table-hover table-responsive-md align-middle">
				<DishTableHeader />
				<tbody>
					{items &&
						items.map((item) => <DishTableRow item={item} key={item.id} />)}
				</tbody>
			</table>
		</main>
	);
}

export default Dish;
