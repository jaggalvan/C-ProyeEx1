﻿import { useEffect, useState } from "react"
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, ModalFooter, Button } from "reactstrap"

const modeloPersona = {
    id: 0,
    name: "",
    description: "",
    isCompleted: ""
}

const ModalPersona = ({ mostrarModal, setMostrarModal, guardarPersona, editar, setEditar, editarPersona}) => {

    const [persona, setPersona] = useState(modeloPersona);

    const actualizaDato = (e) => {
        console.log(e.target.name + " : " + e.target.value)
        setPersona(
            {
                ...persona,
                [e.target.name]: e.target.value
            }
        )
    }

    const enviarDatos = () => {

        if (persona.id == 0) {
            guardarPersona(persona)
        } else {
            editarPersona(persona)
        }

    }

    useEffect(() => {
        if (editar != null) {
            setPersona(editar)
        } else {
            setPersona(modeloPersona)
        }

    }, [editar])

    const cerrarModal = () => {
        setMostrarModal(!mostrarModal)
        setEditar(null)
    }

    return (

        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                {persona.id == 0 ? "Nuevo Persona" : "Editar Persona"}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input name="name" onChange={(e) => actualizaDato(e)} value={persona.name} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Description</Label>
                        <Input name="description" onChange={(e) => actualizaDato(e)} value={persona.Description} />
                    </FormGroup>
                    <FormGroup>
                        <Label>IsCompleted</Label>
                        <Input name="isCompleted" onChange={(e) => actualizaDato(e)} value={persona.IsCompleted} />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviarDatos}>Guardar</Button>
                <Button color="danger" size="sm" onClick={cerrarModal}>Cerrar</Button>
            </ModalFooter>
        </Modal>

    )

}

export default ModalPersona;