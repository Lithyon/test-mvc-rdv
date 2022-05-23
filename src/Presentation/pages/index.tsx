import {BrowserRouter, Route, Routes} from "react-router-dom";
import RendezVous from "./RendezVous";
import PagesDetails from "./PagesDetails";
import Authentification from "./Authentification";

export default function Pages() {
    return <BrowserRouter>
        <Routes>
            <Route path={PagesDetails.RendezVous.link} element={<RendezVous/>}/>
            <Route path={PagesDetails.Auth.link} element={<Authentification/>}/>
        </Routes>
    </BrowserRouter>
}