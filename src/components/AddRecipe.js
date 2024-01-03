import { useState } from 'react';
import { MdClose } from "react-icons/md";

const AddNote = ({ setAddSection, addNote }) => {
	const [noteTitle, setNoteTitle] = useState('');
	const [noteContent, setNoteContent] = useState('');
	const [noteIngredients, setNoteIngredients] = useState('');
	const [noteInstructions, setNoteInstructions] = useState('');


	const handleTitleChange = (event) => {
		setNoteTitle(event.target.value);
	};

	const handleContentChange = (event) => {
		setNoteContent(event.target.value);
	};

	const handleIngredientsChange = (event) => {
		setNoteIngredients(event.target.value);
	};

	const handleInstructionsChange = (event) => {
		setNoteInstructions(event.target.value);
	};

	const handleSaveClick = () => {
		if (noteTitle.trim().length > 0) {
			addNote(noteTitle, noteContent, noteIngredients, noteInstructions);
			setNoteContent('');
			setNoteTitle('');
			setNoteIngredients('');
			setNoteInstructions('');
			setAddSection(false);
		}
	};

	return (
		<div className="addNote">
			<div className="inputArea">
				<h2>ADD YOUR RECIPE<div className="close-btn" onClick={() => setAddSection(false)}><MdClose /></div></h2>
				<p>Title</p>
				<input
					value={noteTitle}
					type="text"
					onChange={handleTitleChange}
					placeholder="Title" />
				<p>description</p>
				<input
					value={noteContent}
					type="text"
					onChange={handleContentChange}
					placeholder="Write a description" />
				<p>Ingredients</p>
				<input
					value={noteIngredients}
					type="text"
					onChange={handleIngredientsChange}
					placeholder="Write ingredients" />
				<p>Instructions</p>
				<input
					value={noteInstructions}
					type="text"
					onChange={handleInstructionsChange}
					placeholder="Write instructions" />
				<div className='addButton'><button onClick={handleSaveClick}>ADD</button></div>
			</div>
		</div>

	);
};

export default AddNote;
