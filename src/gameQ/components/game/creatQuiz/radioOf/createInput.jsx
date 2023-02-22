import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
export function Radio({name, type}) {
    return (
        <>
            <Col>
                <label className='fw-bold' style={{fontSize:'22px'}} htmlFor={`Radio___${name}`}>
                    <Form.Check
                        inline
                        name="group1"
                        type='radio'
                        id={`inline-${name}`}/>
                    {name}:
                </label>
            </Col>
        </>
    )
}