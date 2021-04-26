import React from 'react';
import PropTypes from 'prop-types';

function DishTableRow({ item }) {
	const { id, name, tags } = item;

	return (
		<tr>
			<th scope="row">{id}</th>
			<td>{name}</td>
			<td>{tags}</td>
			<td>
				<div className="btn-group">
					<button type="button" className="btn btn-outline-success">
						<i className="fas fa-play" />
					</button>
					<a href="/" className="btn btn-outline-primary">
						<i className="far fa-edit" />
					</a>
					<a href="/" className="btn btn-outline-danger">
						<i className="far fa-trash-alt" />
					</a>
				</div>
			</td>
		</tr>
	);
}

DishTableRow.propTypes = {
	item: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
		tags: PropTypes.string,
	}).isRequired,
};

export default DishTableRow;
