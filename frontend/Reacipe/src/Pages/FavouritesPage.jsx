import axios from 'axios';
import React, { useEffect, useState } from 'react'
import FavCard from '../Components/FavCard';

export default function FavouritesPage() {
  const [ data, setData ] = useState([]);
  const fetchFunc = () => {
    axios.get(`http://localhost:8080/reciepes/`)
      .then(res => {
        console.log(res.data.data);
        setData(res.data.data)
      })
      .catch(err => console.log(err))
  };

  useEffect(() => {
    fetchFunc()
  }, []);
  return (
    <div className="d-flex justify-content-around flex-wrap gap-3 px-5 mt-5 mb-5">
      {
        data?.map((item)=>{
          return <FavCard key={item.idMeal} item={item} />
        })
      }
    </div>
  )
}
