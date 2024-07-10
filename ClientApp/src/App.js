import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap"
import TablaContacto from "./Componentes/TablaContacto"

const app = () => {
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
                            <TablaContacto/>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default app;