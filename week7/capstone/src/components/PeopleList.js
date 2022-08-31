import React from 'react';



const PeopleList = (props) => {
    
	const FavComponent = props.favComponent;

	return (
		<>
			{props.people.map((person, index) => (
				<div className='image-container'>
					<img src={person.Poster} alt='person'></img>
					<div
						onClick={() => props.handleFavoritesClick(person)}
						className='overlay'
					>
						<FavComponent />
					</div>
				</div>
			))}
		</>
	);
};



export default PeopleList;