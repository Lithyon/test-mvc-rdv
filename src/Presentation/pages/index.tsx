import {BrowserRouter, Route, Routes} from "react-router-dom";
import RendezVous from "./RendezVous";
import PagesDetails from "./PagesDetails";
import Authentification from "./Authentification";

export default function Pages() {
    const [serverPath] = window.location.pathname.split(/\/app/gi);

    return <BrowserRouter basename={serverPath}>
        <Routes>
            <Route path={PagesDetails.RendezVous.link} element={<RendezVous/>}/>
            <Route path={PagesDetails.Auth.link} element={<Authentification/>}/>
        </Routes>
    </BrowserRouter>
}