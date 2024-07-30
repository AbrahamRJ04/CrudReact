import {useEffect, useState } from "react"
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap"
import TablaContacto from "./Componentes/TablaContacto"
import ModalContacto from "./Componentes/ModalContacto"

const App = () => {

    const [contactos, setContactos] = useState([])
    const [muestraModal, setMostrarModal] = useState(false)

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


    const guardarContacto = async (contacto) => {

        const response = await fetch("api/contacto/Guardar", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(contacto)
        })

        if (response.ok) {
            setMostrarModal(!muestraModal);
            MostrarContactos();
        }

    }


    return (
        <Container>
            <Row className="mt-5">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                        <h5>Lista de Contactos</h5>
                        </CardHeader>
                        <CardBody>
                            <Button size="sm" color="success"
                                onClick={() => setMostrarModal(!muestraModal) }
                            >Nuevo Contaco</Button>
                            <hr></hr>
                            <TablaContacto data={contactos} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <ModalContacto

                muestraModal={muestraModal}
                setMostrarModal={setMostrarModal}
                guardarContacto={guardarContacto }
            />

        </Container>
    )
}

export default App;