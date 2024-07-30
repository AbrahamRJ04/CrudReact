﻿import { useState } from "react";
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter, Button } from "reactstrap";

const modalContacto = {
    idContacto: 0,
    nombre: "",
    correo: "",
    telefono: ""
};

const ModalContacto = ({ muestraModal, setMostrarModal, guardarContacto }) => {
    const [contacto, setContacto] = useState(modalContacto);

    const actualizarDato = (e) => {
        console.log(e.target.name + " : " + e.target.value);
        setContacto({
            ...contacto,
            [e.target.name]: e.target.value
        });
    };

    const enviarDatos = () => {
        if (contacto.idContacto === 0) {
            guardarContacto(contacto);
        }
    };

    return (
        <Modal isOpen={muestraModal} toggle={() => setMostrarModal(!muestraModal)}>
            <ModalHeader toggle={() => setMostrarModal(!muestraModal)}>
                Nuevo Contacto
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input name="nombre" onChange={actualizarDato} value={contacto.nombre} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Correo</Label>
                        <Input name="correo" onChange={actualizarDato} value={contacto.correo} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Teléfono</Label>
                        <Input name="telefono" onChange={actualizarDato} value={contacto.telefono} />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviarDatos}>Guardar</Button>
                <Button color="danger" size="sm" onClick={() => setMostrarModal(!muestraModal)}>Cerrar</Button>
            </ModalFooter>
        </Modal>
    );
};

export default ModalContacto;