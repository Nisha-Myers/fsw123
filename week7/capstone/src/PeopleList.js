import React from 'react';



const MovieList = (props) => {
	return (
		<>
			{props.people.map((person, index) => (
				<div className='image-container'>
					<img src={person.Poster} alt='person'></img>
				</div>
			))}
		</>
	);
};



export default MovieList;