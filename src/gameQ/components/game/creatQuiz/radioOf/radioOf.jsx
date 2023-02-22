import {Radio} from "./createInput";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export function RadioOf() {
    var unciqueKey = 0;
    return (
        <>
            <div style={{width: '1100px', borderRadius: '7px'}} className='container bg-primary p-3 my-4'>
                <Container>
                    <Row>
                        {["A", "B", "C", "D"].map((e, type, index) => {
                            return <Radio key={unciqueKey += 1} type={index} name={e}/>
                        })}
                    </Row>
                </Container>

            </div>
        </>
    );
}