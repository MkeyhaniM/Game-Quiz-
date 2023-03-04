import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
export function Radio({name, check, index,getDisabled}) {
    return (
        <>
            <Col className='text text-center'>
                <label className='fw-bold' style={{fontSize: '20px'}} htmlFor={`Radio___${name}`}>
                    {name} :
                    <Form.Check
                        onChange={e => check(e)}
                        className='px-2'
                        inline
                        disabled={getDisabled}
                        data-index={index}
                        name="group1"
                        type='radio'
                        id={`Answer${index}`}/>
                </label>
            </Col>
        </>
    )
}