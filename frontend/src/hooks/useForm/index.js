import { useReducer } from 'react';

const formReducer = (state, event) => {
	return {
		...state,
		[event.name]: event.value,
	};
};

function useForm() {
	const [formData, setFormData] = useReducer(formReducer, {});

	const handleChange = (e) => {
		setFormData({
			name: e.target.name,
			value: e.target.value,
		});
	};

	return { formData, handleChange };
}

export default useForm;
