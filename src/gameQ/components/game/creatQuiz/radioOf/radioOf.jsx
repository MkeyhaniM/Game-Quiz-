import {Radio} from "./createInput";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export function RadioOf({selectedClientAnswer, getDisabled}) {
    var unciqueKey = 0;
    const word = ["A", "B", "C", "D"];
    return (
        <>
            <div style={{width: '1100px', borderRadius: '7px'}}
                 className='container bg-secondary bg-opacity-25 p-3 my-4'>
                <Container>
                    <Row>
                        {word.map((e) => {
                            return <Radio key={unciqueKey += 1} getDisabled={getDisabled} check={selectedClientAnswer} index={unciqueKey} name={e}/>
                        })}
                    </Row>
                </Container>

            </div>
        </>
    );
}