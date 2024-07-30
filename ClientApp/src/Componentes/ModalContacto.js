import { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter, Button } from "reactstrap";

const modalContacto = {
    idContacto: 0,
    nombre: "",
    correo: "",
    telefono: ""
};

const ModalContacto = ({ muestraModal, setMostrarModal, guardarContacto, editar, setEditar, editarContacto }) => {
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
        } else {
            editarContacto(contacto)
        }
        cerrarModal(); // Cerrar modal después de enviar los datos
    };

    const cerrarModal = () => {
        setMostrarModal(!muestraModal);
        setEditar(null);
        resetContacto(); // Reset contacto al cerrar el modal
    };

    const resetContacto = () => {
        setContacto(modalContacto);
    };

    useEffect(() => {
        if (editar !== null) {
            setContacto(editar);
        } else if (contacto.idContacto === 0) {
            resetContacto();
        }
    }, [editar]);

    return (
        <Modal isOpen={muestraModal} toggle={cerrarModal}>
            <ModalHeader toggle={cerrarModal}>
                {contacto.idContacto === 0 ? "Nuevo Contacto" : "Editar Contacto"}
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
                <Button color="danger" size="sm" onClick={cerrarModal}>Cerrar</Button>
            </ModalFooter>
        </Modal>
    );
};

export default ModalContacto;
