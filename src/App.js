import './App.css';
import CardList from './components/cart-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { useEffect, useState } from 'react';

const App = () => {
	const [searchField, setSearchField] = useState('');
	const [monsters, setMonsters] = useState([]);
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);
	// const [loading, setLoading] = useState(false);

	const onSearchChange = (e) => {
		const searchFieldString = e.target.value.toLowerCase();
		setSearchField(searchFieldString);
	};

	useEffect(() => {
		// setLoading(true);
		try {
			fetch('https://jsonplaceholder.typicode.com/users')
				.then((res) => res.json())
				.then((users) => setMonsters(users));
			// .finally(() => setLoading(false));
		} catch (error) {
			throw new Error(error.message);
		}
	}, []);

	useEffect(() => {
		const newFilteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField)
		);

		setFilteredMonsters(newFilteredMonsters);
	}, [monsters, searchField]);

	// if (loading)
	// 	return (
	// 		<div>
	// 			<h1>Loading</h1>
	// 		</div>
	// 	);
	return (
		<div className="App">
			<h1 className="app-title">Monsters Rolodex</h1>
			<SearchBox
				onChangeHandler={onSearchChange}
				className={'monsters-search-box'}
				type={'search'}
				placeholder={'Search Monsters...'}
			/>
			<CardList monster={filteredMonsters} />
		</div>
	);
};

export default App;
