import {useEffect, useState } from "react"
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap"
import TablaContacto from "./Componentes/TablaContacto"

const App = () => {

    const [contactos, setContactos] = useState([])

    const MostrarContactos = async () => {

        const response = await fetch("api/contacto/Lista");

        if (response.ok) {
            const data = await response.json();
            setContactos(data);
        } else {
            console.error("----> Ocurrio un error al realizar la operacion");
        }
    }

    useEffect(() => {
        MostrarContactos()
    },[])





    return (
        <Container>
            <Row className="mt-5">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                        <h5>Lista de Contactos</h5>
                        </CardHeader>
                        <CardBody>
                            <Button size="sm" color="success">Nuevo Contaco</Button>
                            <hr></hr>
                            <TablaContacto data={contactos} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default App;