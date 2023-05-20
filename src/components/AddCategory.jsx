import { useState } from 'react';

import PropType from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

	const [inputValue, setInputValue] = useState('');

	const onInputChange = ( { target } ) => {
		setInputValue( target.value );
	};

	const onSubmit = (event) => {
		event.preventDefault();

		const newInputValue = inputValue.trim();

		if ( newInputValue.length <= 1 ) return;

		// setCategories(cat => [...cat, inputValue]);
		onNewCategory( newInputValue );
		setInputValue('');
	};

	return (
		<form onSubmit={ onSubmit }>
			<input 
				type="text" 
				placeholder="Search Gif"
				// defaultValue={ inputValue }
				value={ inputValue }
				onChange={ onInputChange }
			/>
		</form>
	);
};


AddCategory.propTypes = {
	onNewCategory: PropType.func.isRequired
};