import { useState } from 'react';
import { Form, FormGroup, Col, Label, Input, Button} from 'reactstrap';

const initialState = {
    color: '',
    size: 1
};

const MyForm = ({cajas, setCajas}) => {

    const [caja, setCaja] = useState(initialState)

    const inputsHandler = (e) => {
        const {name, value} = e.target;

        setCaja({
            ...caja,
            [name]: value
        })
    }

    const createCaja = (e) => {
        e.preventDefault();
        if (caja.size === '0') {
            alert('El tamaño del bloque no puede ser 0.')
        } else if(caja.color === '') {
            alert('Debe seleccionar un color para la caja.')
        } else {
            setCajas([...cajas, caja]);        
            setCaja(initialState);
        }        
    }

    return (
        <Form onSubmit={ createCaja }>
            <FormGroup row>
                <Label htmlFor="color" sm={2}>Color</Label>
                <Col sm={10}>
                    <Input
                        id="color"
                        name="color"
                        type="color"
                        required
                        value={caja.color} 
                        onChange={inputsHandler}
                    />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label htmlFor="size" sm={2}>Tamaño (px)</Label>
                <Col sm={10}>
                    <Input
                        id="size"
                        name="size"
                        type="number"
                        required
                        value={caja.size} 
                        onChange={inputsHandler}
                    />
                </Col>
            </FormGroup>
            <FormGroup>
                <Col sm={{ offset: 2, size: 10 }}>
                    <Button color='primary'>
                        Agregar
                    </Button>
                </Col>
            </FormGroup>
        </Form>
    )
}

export default MyForm;
