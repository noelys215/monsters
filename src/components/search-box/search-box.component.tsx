import './search-box.styles.css';
import { ChangeEvent } from 'react';

type SearchBoxProps = {
	className: string;
	placeholder?: string;
	type: string;
	onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ onChangeHandler, className, type, placeholder }: SearchBoxProps) => (
	<div>
		<input
			className={`search-box ${className}`}
			type={type}
			placeholder={placeholder}
			onChange={onChangeHandler}
		/>
	</div>
);

export default SearchBox;
