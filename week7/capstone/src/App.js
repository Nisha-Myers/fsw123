import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import PeopleList from './components/PeopleList';
import PeopleListHeader from './components/PeopleListHeader';
import favPerson from './components/favPerson';
import RemoveFav from './components/RemoveFav';
import SearchBox from './components/SearchBox';
import Welcome from './components/Welcome';

import './App.css';




//apikey=469a611a
const App = () => {
	const [people, setpeople] = useState([]);
	const [Favs, setFavs] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getPersonRequest = async (searchValue) => {
		const url = `https://swapi.dev/api/people/?page=1`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setpeople(responseJson.Search);
		}
	};

	useEffect(() => {
		getPersonRequest(searchValue);
	}, [searchValue]);

	useEffect(() => {
		const personFavs = JSON.parse(
			localStorage.getItem('person-app-Favs')
		);

		if (personFavs) {
			setFavs(personFavs);
		}
	}, []);


	const saveToLocalStorage = (items) => {
		localStorage.setItem('person-app-Favs', JSON.stringify(items));
	};

	const addFavStar = (person) => {
		const newFavList = [...Favs, person];
		setFavs(newFavList);
		saveToLocalStorage(newFavList);
	};

	const removeFavStar = (person) => {
		const newFavList = Favs.filter(
			(fav) => fav.imdbID !== person.imdbID
		);

		setFavs(newFavList);
		saveToLocalStorage(newFavList);
	};

	return (
		<div className=''>
			<Router>

				<header className='header'>
					<Link to='/' className='links'>Welcome!</Link>
					<Link to='/people' className='links'>SEARCH the STARS</Link>
					<Link to='/Favs' className='links'>YOUR STARS</Link>
				</header>

				<main>
					<Switch>
						<Route exact={true} path='/'>
							<Welcome />
						</Route>

						<Route path='/people'>
						<div className=''>
							<PeopleListHeader heading='people' />
							<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
						</div>

						<div className='flex-box'>
							<PeopleList
								people={people}
								handleFavoritesClick={addFavStar}
								favComponent={favPerson}
							/>

						</div>
						</Route>
						<Route path='/Favs'>
						<div className=''>
							<PeopleListHeader heading='Favs' />
						</div>
						<div className='flex-box'>
							<PeopleList
								people={Favs}
								handleFavoritesClick={removeFavStar}
								favComponent={RemoveFav}
							/>
						</div>

						</Route>
					</Switch>
				</main>
			</Router>
		</div>
	);
};



export default App;
