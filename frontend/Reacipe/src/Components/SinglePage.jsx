import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function SinglePage() {
  const { idMeal } = useParams();
  const [singleItem, setSingleItem] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8080/reciepes/${idMeal}`)
      .then((res) => {
        console.log(res.data.data);
        setSingleItem(res.data.data[0]);
      })
      .catch((err) => console.log(err));
    
    console.log(idMeal);
  }, []);
  return (
    <>
      <div style={{ width: "600px" }} className="border border-primary-subtle">
        <img
          className="w-50 rounded-top "
          src={
            singleItem.strMealThumb
              ? singleItem.strMealThumb
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8wu2nQV9-QkofJfPjKBkR-eHBpej28Q-Z4w&usqp=CAU"
          }
          alt=""
        />
        <h3>Title: {singleItem.strMeal}</h3>
        <h3>Category: {singleItem.strCategory}</h3>
        <h3>Cusion: {singleItem.strArea}</h3>
      </div>
      <Link to="/" className="btn btn-primary">
        {" "}
        Go Back{" "}
      </Link>
    </>
  );
}
