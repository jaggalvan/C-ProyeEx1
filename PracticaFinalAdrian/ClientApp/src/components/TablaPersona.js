import { Button, Table } from "reactstrap"

const TablaPersona = ({ data, setEditar, mostrarModal, setMostrarModal, eliminarPersona }) => {

    const enviarDatos = (persona) => {
        setEditar(persona)
        setMostrarModal(!mostrarModal)
    }

    return (

        <Table striped responsive>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>IsCompleted</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    (data.length < 1) ? (
                        <tr>
                            <td colSpan="4">Sin registros</td>
                        </tr>
                    ) : (
                            data.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.description}</td>
                                    <td>{item.isCompleted}</td>
                                    <td>
                                        <Button color="primary" size="sm" className="me-2" onClick={() => enviarDatos(item)}>Editar</Button>
                                        <Button color="danger" size="sm" onClick={() => eliminarPersona(item.id)}>Eliminar</Button>
                                    </td>
                                </tr>
                            ))
                    )
                }
            </tbody>
        </Table>
    )

}

export default TablaPersona;