import { useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "../Components/CardComponent";
export default function HomePage() {
  const [ search, setSearch ] = useState("");
  const [ data, setData ] = useState([]);
  const fetchFunc = (search) => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then(res => {
      console.log(res);
      setData(res.data.meals);
    })
    .catch(err => console.log(err))
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    fetchFunc(search);
  }
  useEffect(() => {}, []);
  return (
    <div>
      <form className="mt-3" onSubmit={(e => handlesubmit(e))}>
        <input
          type="text"
          name="search"
          placeholder="Search Any Reciepe"
          className="bg-light px-3 pb-2 rounded outline text-dark"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input type="submit" name="submit" className="btn btn-primary ms-3"  />
      </form>

      <div className="d-flex justify-content-around flex-wrap gap-3 px-5 mt-5 mb-5">
        {
          data?.map((item)=>{
            return <CardComponent key={item.idMeal} item={item} />
          })
        }
      </div>

    </div>
  );
}
