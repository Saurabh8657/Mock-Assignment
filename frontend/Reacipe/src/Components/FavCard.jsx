import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function FavCard({ item }) {
  const navigate = useNavigate();
  const handleViewDetails = (item) => {
    navigate(`/reciepes/details/${item.idMeal}`)
  }
  const handleDelete = (item) => {
    axios.delete(`http://localhost:8080/reciepes/${item.idMeal}`)
      .then(res => console.log(res))
      .then(() => window.location.reload())
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
      <button className="btn btn-primary" onClick={(e) => handleViewDetails(item)}>View Details</button>
      <button className="btn btn-success ms-3" onClick={(e) => handleDelete(item)}>Delete</button>
    </div>
  );
}
