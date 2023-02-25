import {Radio} from "./createInput";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export function RadioOf({selectedClicetAnswer}) {
    var unciqueKey = 0;
    return (
        <>
            <div style={{width: '1100px', borderRadius: '7px'}} className='container bg-secondary bg-opacity-25 p-3 my-4'>
                <Container>
                    <Row>
                        {["A", "B", "C", "D"].map((e, type, index) => {
                            return <Radio key={unciqueKey += 1} check={selectedClicetAnswer} index={unciqueKey} name={e}/>
                        })}
                    </Row>
                </Container>

            </div>
        </>
    );
}