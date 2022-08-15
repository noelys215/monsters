import { Component } from 'react';
import './App.css';
import CardList from './components/cart-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: '',
		};
		console.log('constructor');
	}

	componentDidMount() {
		console.log('componentDidMount');
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((users) =>
				this.setState(
					() => {
						return { monsters: users };
					}
					// () => console.log(this.state)
				)
			)
			.catch((err) => console.log(err.message));
	}

	onSearchChange = (e) => {
		const searchField = e.target.value.toLowerCase();

		this.setState(() => {
			return { searchField };
		});
	};

	render() {
		console.log('Render');
		const { monsters, searchField } = this.state;
		const { onSearchChange } = this;

		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField)
		);

		return (
			<div className="App">
				<SearchBox
					onChangeHandler={onSearchChange}
					className={'search-box'}
					type={'search'}
					placeholder={'Search Monsters...'}
				/>
				<CardList monster={filteredMonsters} />
			</div>
		);
	}
}

export default App;
