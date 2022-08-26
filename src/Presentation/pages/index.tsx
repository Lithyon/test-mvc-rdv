import {BrowserRouter, Route, Routes} from "react-router-dom";
import RendezVous from "./RendezVous";
import PagesDetails from "./PagesDetails";
import Authentification from "./Authentification";
import {Card, Col, Container, Row} from "macif-components";

export default function Pages() {
    const [serverPath] = window.location.pathname.split(/\/app/gi);

    return <Container className="mcf-mt--10">
        <Row>
            <Col>
                <Card body>
                    <BrowserRouter basename={serverPath}>
                        <Routes>
                            <Route path={PagesDetails.RendezVous.link} element={<RendezVous/>}/>
                            <Route path={PagesDetails.Auth.link} element={<Authentification/>}/>
                        </Routes>
                    </BrowserRouter>
                </Card>
            </Col>
        </Row>
    </Container>;
}
