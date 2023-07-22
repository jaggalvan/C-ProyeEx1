import { useEffect, useState } from "react"
import { Col, Container, Row, Card, CardHeader, CardBody, Button } from "reactstrap"
import ModalPersona from "./components/ModalPersona"
import TablaPersona from "./components/TablaPersona"

const App = () => {

    const [persona, setPersona] = useState([])
    const [mostrarModal, setMostrarModal] = useState(false)
    const [editar, setEditar] = useState(null)

    const mostrarPersona = async () => {

        const response = await fetch("api/Personaitem/Lista");

        if (response.ok) {
            const data = await response.json();
            setPersona(data)
        } else {
            console.log("Error en los datos de la lista")
        }

    }

    useEffect(() => {
        mostrarPersona()
    }, [])

    const guardarPersona = async (persona) => {

        const response = await fetch("api/personaitem/Guardar", {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(persona)
        })

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarPersona();
        }

    }

    const editarPersona = async (persona) => {

        const response = await fetch("api/personaitem/Editar", {

            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(persona)
        })

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarPersona();
        }

    }

    const eliminarPersona = async (id) => {

        var respuesta = window.confirm("Desea eliminar la persona?")

        if (!respuesta) {
            return;
        }

        const response = await fetch("api/personaitem/Eliminar/" + id, {
            method: 'DELETE'
        })

        if (response.ok) {
            mostrarPersona();
        }

    }

    return (
        <Container>
            <Row className="mt-5">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                        <h5>Lista de Persona</h5>
                        </CardHeader>
                        <CardBody>
                            <Button size="sm" color="success" onClick={() => setMostrarModal(!mostrarModal)}>Nuevo Persona</Button>
                            <hr></hr>
                            <TablaPersona data={persona}
                                setEditar={setEditar}
                                mostrarModal={mostrarModal}
                                setMostrarModal={setMostrarModal}
                                eliminarPersona={eliminarPersona}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <ModalPersona
                mostrarModal={mostrarModal}
                setMostrarModal={setMostrarModal}
                guardarPersona={guardarPersona}
                editar={editar}
                setEditar={setEditar}
                editarPersona={editarPersona}
            />
        </Container>
    )
}

export default App;