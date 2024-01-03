import { MdClose } from "react-icons/md";

function ViewRecipe({ handleClose, data }) {

    return (
        <div className="viewContainer">
            <div className="card">
                <div className="close-btn" onClick={handleClose}><MdClose /></div>
                <div class="image">
                    <h2>{data.title}</h2>
                </div>
                <div className="info">
                    <p> {data.content}</p>
                    <em>Ingredients</em>
                    <p> {data.ingredients}</p>
                    <em>Instructions</em>
                    <p> {data.instructions}</p>
                </div>
            </div>
        </div>
    )
}

export default ViewRecipe;