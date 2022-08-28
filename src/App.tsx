import './App.css';
import CardList from './components/cart-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { useEffect, useState, ChangeEvent } from 'react';
import { getData } from './utils/data.utils';

export type Monster = {
	id: string;
	name: string;
	email: string;
};

const App = () => {
	const [searchField, setSearchField] = useState('');
	const [monsters, setMonsters] = useState<Monster[]>([]);
	const [filteredMonsters, setFilteredMonsters] = useState(monsters);

	const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
		const searchFieldString = e.target.value.toLowerCase();
		setSearchField(searchFieldString);
	};

	useEffect(() => {
		const fetchUsers = async () => {
			const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
			setMonsters(users);
		};

		fetchUsers();
	}, []);

	useEffect(() => {
		const newFilteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField)
		);

		setFilteredMonsters(newFilteredMonsters);
	}, [monsters, searchField]);

	return (
		<div className="App">
			<h1 className="app-title">Monsters Rolodex</h1>
			<SearchBox
				onChangeHandler={onSearchChange}
				className={'monsters-search-box'}
				type={'search'}
				placeholder={'Search Monsters...'}
			/>
			<CardList monsters={filteredMonsters} />
		</div>
	);
};

export default App;
