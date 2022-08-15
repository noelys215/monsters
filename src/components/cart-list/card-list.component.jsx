import { Component } from 'react';

class CardList extends Component {
	render() {
		const { monster } = this.props;

		return (
			<div>
				{monster.map((monster) => {
					return <h1 key={monster.id}>{`${monster.name}`}</h1>;
				})}
			</div>
		);
	}
}

export default CardList;
