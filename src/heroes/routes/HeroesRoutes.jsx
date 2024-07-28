import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/Navbar"
import { Footer } from "../../ui/components/Footer"
import { HomePage } from "../pages/HomePage"
import { AnimePage } from "../pages/AnimePage"
import { ComicPage } from "../pages/ComicPage"
import { HeroPage } from "../pages/HeroPage"


export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Navigate to="/home"/>}></Route>
                <Route path="home" element={<HomePage/>} ></Route>
                <Route path="animes" element={<AnimePage/>} ></Route>
                <Route path="comics" element={<ComicPage/>} ></Route>
                <Route path="hero/:id" element={<HeroPage/>} ></Route>
            </Routes>
        <Footer/>
    </>

  )
}
