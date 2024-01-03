import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import RecipeList from './components/RecipeList';
import Header from './components/Header';
import img1 from "./components/img/Dal-Makhani.jpg";
import img2 from "./components/img/Biryani.jpg";
import img3 from "./components/img/Dosa.jpg";

const App = () => {

	const getRandomColor = () => {
		const colors = ['#ff8572', '#72beed', '#8be874', '#fcca5f', '#dca8ff', '#a1e5f4'];
		return colors[Math.floor(Math.random() * colors.length)];
	};

	const [addSection, setAddSection] = useState(false)

	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			image: { img1 },
			title: 'Dal Makhani',
			content: 'Creamy, spiced lentils simmered in buttery tomato goodness, a classic indulgence',
			ingredients: 'Black lentils (urad dal) - 1 cup, Red kidney beans (rajma) - 1/4 cup, Ghee (clarified butter) - 2 tablespoons, Onion, finely chopped - 1 large, Tomato, pureed - 1 cup, Ginger-garlic paste - 1 tablespoon, Green chili, chopped - 1 or to taste, Red chili powder - 1 teaspoon, Turmeric powder - 1/2 teaspoo, Garam masala - 1 teaspoon, Cumin powder - 1 teaspoon, Coriander powder - 1 teaspoon, Cream - 1/4 cup, Salt - to taste, Water - as needed, Fresh coriander leaves, chopped - for garnish',
			instructions: 'Rinse urad dal and rajma, then soak them in water overnight or for at least 8 hours., Drain and rinse soaked lentils and beans., In a large pot, add lentils, beans, and enough water to cover. Cook until soft, usually 20-25 minutes in a pressure cooker or 1-2 hours on the stove., While lentils and beans are cooking, puree the tomatoes., In a separate pan, melt butter. Add cumin seeds and let them splutter, Add chopped onions and sauté until golden brown, Stir in ginger-garlic paste and cook until the raw smell disappears, Add garam masala, red chili powder, and turmeric powder. Sauté for a minute, Pour in the tomato puree and cook until the oil separates from the masala, Once lentils and beans are cooked, add them to the tomato masala mixture. Mix well, Let the dal simmer on low heat for at least 30 minutes. The longer it simmers, the better the flavors blend, Stir in the cream and continue to simmer for an additional 10-15 minutes, Adjust salt to taste and sprinkle fresh coriander leaves before serving. Serve hot with rice or naan.',
			color: getRandomColor()
		},
		{
			id: nanoid(),
			image: { img2 },
			title: 'Biryani',
			content: 'Savor aromatic rice dish, layered with spices, meats, and fragrant herbs',
			color: getRandomColor()
		},
		{
			id: nanoid(),
			image: { img3 },
			title: 'Masala Dosa',
			content: 'Savory South Indian crepe made from fermented rice and lentil batter',
			color: getRandomColor()
		},
		{
			id: nanoid(),
			image: { img1 },
			title: 'Chicken Korma',
			content: 'Creamy, aromatic, and tender chicken in a rich, spiced yogurt sauce.',
			color: getRandomColor()
		},
		{
			id: nanoid(),
			image: { img1 },
			title: 'Madras Curry',
			content: 'Spicy and aromatic chicken curry with bold Madras flavors',
			color: getRandomColor()
		},
		{
			id: nanoid(),
			image: { img1 },
			title: 'Vada pav',
			content: 'Spicy potato fritter in a bun, an iconic Mumbai street food',
			color: getRandomColor()
		},
		{
			id: nanoid(),
			image: { img1 },
			title: 'Gulab Jamun',
			content: 'Delicious, deep-fried dough balls soaked in sweet, aromatic sugar syrup',
			color: getRandomColor()
		},
		{
			id: nanoid(),
			image: { img1 },
			title: 'Chana Masala',
			content: 'Spicy, aromatic chickpea curry with rich tomato-based sauce and vibrant spices',
			ingredients: 'Chickpeas (Chana), 2 cups dried chickpeas or 2 cans (15 oz each) of cooked chickpeas, 1 large onion, finely chopped, Tomatoes , 2 medium-sized tomatoes, finely chopped or pureed, Ginger-Garlic Paste, 1 tablespoon ginger-garlic paste, Cooking Oil, tablespoons cooking oil ,1 teaspoon cumin seeds - 1 teaspoon coriander powder - 1/2 teaspoon turmeric powder - 1/2 teaspoon red chili powder (adjust according to your spice preference) - 1 teaspoon garam masala To taste Fresh Coriander Leaves Chopped for garnish ,1 tablespoon (optional, for a hint of citrus flavor) ,As needed for cooking and achieving desired consistency Optional Additions, 2-3, finely chopped (for extra heat) - **Kasuri Methi (Dried Fenugreek Leaves):** - 1 teaspoon, crushed (for enhanced flavor) , 1 tablespoon (for a richer tomato taste) Note: Adjust the spice levels, salt, and additional ingredients according to your taste preferences.',
			instructions: 'Soak and cook 2 cups dried chickpeas or use 2 cans of cooked chickpeas, In a pan, heat 2 tbsp oil, add 1 tsp cumin seeds, and sauté 1 finely chopped onion until golden, Stir in 1 tbsp ginger-garlic paste, then add 1 tsp each of coriander, turmeric, and red chili powder, and 1 tsp garam masala, Add 2 chopped or pureed tomatoes. Cook until oil separates, Mix in cooked chickpeas. Add salt. Cook for 10-15 mins, Add water as needed for desired thickness, Optionally, add 1 tbsp lemon juice, chopped green chilies, and 1 tsp crushed kasuri methi. Garnish with fresh coriander, Enjoy Chana Masala with rice or naan.',
			color: getRandomColor()
		},
	]);

	const [searchText, setSearchText] = useState('');
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (title, content, ingredients, instructions) => {
		const newNote = {
			id: nanoid(),
			title: title,
			content: content,
			ingredients: ingredients,
			instructions: instructions,
			color: getRandomColor()
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header
					setAddSection={setAddSection}
					handleToggleDarkMode={setDarkMode}
					handleSearchNote={setSearchText} />
				<RecipeList
					notes={notes.filter((note) =>
						note.title.toLowerCase().includes(searchText) || note.title.includes(searchText)
					)}
					setAddSection={setAddSection}
					addSection={addSection}
					setNotes={setNotes}
					addNote={addNote}
					deleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default App;
