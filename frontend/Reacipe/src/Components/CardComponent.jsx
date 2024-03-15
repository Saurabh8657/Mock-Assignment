import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CardComponent({ item }) {
  
  const handleAddToFavourites = (item) => {
    const obj = {
      idMeal: item.idMeal,
      strMealThumb: item.strMealThumb,
      strMeal: item.strMeal,
      strCategory: item.strCategory,
      strArea: item.strArea
    }
    axios.post(`http://localhost:8080/reciepes/`, obj)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
  return (
    <div style={{ width: "300px" }} className="border border-primary-subtle">
      <img
        className="w-50 rounded-top "
        src={
          item.strMealThumb
            ? item.strMealThumb
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8wu2nQV9-QkofJfPjKBkR-eHBpej28Q-Z4w&usqp=CAU"
        }
        alt=""
      />
      <h3>Title: {item.strMeal}</h3>
      <h3>Category: {item.strCategory}</h3>
      <h3>Cusion: {item.strArea}</h3>
      <span className="text-dark fs-4">Ingrediants: </span>
      <span> {item.strIngredient1},</span>
      <span> {item.strIngredient2},</span>
      <span> {item.strIngredient3},</span>
      <span> {item.strIngredient4}</span>
      <p>Instruction: {(item.strInstructions).substring(0, 50)}...</p>
      <button className="btn btn-success ms-3" onClick={(e) => handleAddToFavourites(item)}>Add to Favourites</button>
    </div>
  );
}
