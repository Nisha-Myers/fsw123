import React from 'react';



const SearchBox = (props) => {
    
	return (
		<div className='search-box align-center'>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Type here to search the stars...'
			></input>
		</div>
	);
};



export default SearchBox;