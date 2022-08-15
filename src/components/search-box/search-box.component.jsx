import { Component } from 'react';

class SearchBox extends Component {
	render() {
		const { onChangeHandler, className, type, placeholder } = this.props;

		return (
			<div>
				<input
					className={className}
					type={type}
					placeholder={placeholder}
					onChange={onChangeHandler}
				/>
			</div>
		);
	}
}

export default SearchBox;
