import Accordion from 'react-bootstrap/Accordion';
import Badge from "react-bootstrap/Badge";

export function DescriptionOfQuestion({DescriptionAnwser}) {
    return (
        <Accordion className='mt-4' defaultActiveKey="0">
            <Accordion.Item eventKey="1">
                <Accordion.Header>DescriptionOfQuestion : {DescriptionAnwser ? <Badge className='m-1' bg="primary" pill>1</Badge> :<Badge className='m-1' bg="dark" pill>0</Badge>} </Accordion.Header>
                <Accordion.Body>
                    {DescriptionAnwser ? DescriptionAnwser : "There is no description"}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}