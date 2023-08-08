import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DCPage, MarvelPage, Search, Hero } from "../pages";

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/Marvel" element={<MarvelPage />} ></Route>
                    <Route path="/DC" element={<DCPage />}></Route>
                    <Route path="/" element={<Navigate to="/Marvel" />}></Route>
                    <Route path="/search" element={<Search />} />
                    <Route path="/hero/:id" element={<Hero />} />
                </Routes>
            </div>



        </>


    )
}
