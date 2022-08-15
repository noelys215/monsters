import { Component } from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

class CardList extends Component {
	render() {
		const { monster } = this.props;

		return (
			<div className="card-list">
				{monster.map((monster) => {
					const { id, name, email } = monster;
					return <Card id={id} name={name} email={email} key={id} />;
				})}
			</div>
		);
	}
}

export default CardList;
