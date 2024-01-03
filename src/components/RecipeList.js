import AddRecipe from './AddRecipe';
import ViewRecipe from './ViewRecipe';
import Footer from './Footer';
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from 'react';
import img from "./img/Dal-Makhani.jpg";

const RecipeList = ({ addSection, setAddSection, notes, addNote, deleteNote }) => {

	const [data, setData] = useState({
		id: "",
		title: "",
		content: "",
		ingredients: "",
		instructions: "",
		color: "",
	})

	const [viewSection, setViewSection] = useState(false);
	const view = (data) => {
		setData(data)
		setViewSection(true)
	}

	return (
		<div>
			{addSection && (
				<div>
					<AddRecipe addNote={addNote}
						setAddSection={setAddSection} />
				</div>
			)}
			{viewSection && (
				<div>
					<ViewRecipe
						data={data}
						handleClose={() => setViewSection(false)}
						/>
				</div>
			)}
			<div className='notes-list'>
				{notes.map((note) => (
					<div className='note'>
						<img
							src={img}
							alt="img"
						/>
						<h2>{note.title}</h2>
						<p>{note.content}</p>
						<div className='note-footer'>
							<RiDeleteBin6Line
								onClick={() => deleteNote(note.id)}
								className='delete-icon'
								size='1.2em'
							/>
							<button onClick={() => { view(note) }}>
								VIEW
							</button>
						</div>
					</div>
				))}
			</div>
			<Footer />
		</div>
	);
};

export default RecipeList;
