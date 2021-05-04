import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDish } from 'hooks';

function DishTableRow({ item }) {
	const { handleRemove } = useDish();
	const { id, name, tags } = item;

	const handleDelete = async () => {
		if (window.confirm(`Are you sure you want delete ${name}?`)) {
			handleRemove(id);
		}
	};

	const urlView = `/dish/${id}`;
	const urlEdit = `/dish/edit/${id}`;

	return (
		<tr>
			<th scope="row">{id}</th>
			<td>{name}</td>
			<td>{tags}</td>
			<td>
				<div className="btn-group">
					<Link to={urlView} className="btn btn-outline-success">
						<i className="far fa-eye" />
					</Link>
					<Link to={urlEdit} className="btn btn-outline-primary">
						<i className="far fa-edit" />
					</Link>
					<button
						type="button"
						className="btn btn-outline-danger"
						onClick={handleDelete}
					>
						<i className="far fa-trash-alt" />
					</button>
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
