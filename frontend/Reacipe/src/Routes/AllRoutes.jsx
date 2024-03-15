import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import FavouritesPage from '../Pages/FavouritesPage'
import Navbar from '../Components/Navbar'
import SinglePage from '../Components/SinglePage'

export default function AllRoutes() {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path={"/"} element={<HomePage/>} />
            <Route path={"/reciepe/favourites"} element={<FavouritesPage/>} />
            <Route path={"/reciepes/details/:idMeal"} element={<SinglePage/>} />
        </Routes>
    </div>
  )
}
