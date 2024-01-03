import React from 'react';
import { MdOutlineDarkMode } from "react-icons/md"
import { IoMdAdd } from "react-icons/io";
import { MdSearch } from 'react-icons/md';

const Header = ({ setAddSection, handleToggleDarkMode, handleSearchNote }) => {


	const add = () => {
		setAddSection(true)
	  }

	return (
		<div>
			<div className='header'>
				<h1>Recipe</h1>
				<div className='search'>
					<MdSearch className='search-icons' size='1.3em' />
					<input
						onChange={(event) =>
							handleSearchNote(event.target.value)
						}
						type='text'
						placeholder='Search Recipes...'
					/>
				</div>
				<button
					onClick={() =>
						handleToggleDarkMode(
							(previousDarkMode) => !previousDarkMode
						)
					}
					className='dark-mode-button'
				>
					<MdOutlineDarkMode />
				</button>
				<button
					onClick={add}
					className='dark-mode-button'
				><IoMdAdd />
				</button>

			</div>
		</div>

	);
};

export default Header;
