import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

	const [categories, setCategories] = useState(['kimetsu no yaiba']);

	const onAddCategory = ( newCategory ) => {
		
		//* Verify before inserting if the value already exist in the list
		if (categories.includes(newCategory.toLowerCase())) return;

		setCategories([...categories, newCategory.toLowerCase()]);
		// setCategories(cat => [...cat, 'Naruto']);
	};

	return (
		<>
			<h1>GifExpertApp</h1>

			<AddCategory 
				onNewCategory={onAddCategory} 
			/>

		
			{
				categories.map( ( category ) => (
					<GifGrid 
						key={ category } 
						category={ category } />
				))
			}
		
		</>
	);
};
