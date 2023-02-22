import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Options({Options}) {
    return (
        <Container>
            <Row>
                <Col className='p-2 m-1 border border-opacity-10'>
                    <Badge bg="secondary">
                        A
                    </Badge>{' '}
                    {Options[0]}
                </Col>
                <Col className='p-2 m-1 border border-opacity-10'>
                    <Badge bg="secondary">
                        B
                    </Badge>{' '}
                    {Options[1]}
                </Col>
            </Row>
            <Row>
                <Col className='p-2 m-1 border border-opacity-10'>
                    <Badge bg="secondary">
                        C
                    </Badge>{' '}
                    {Options[2]}
                </Col>
                <Col className='p-2 m-1 border border-opacity-10'>
                    <Badge bg="secondary">
                        D
                    </Badge>{' '}
                    {Options[3]}
                </Col>
            </Row>
        </Container>
    );
}
// export function OptionsALL() {
//     return (
//         <div>
//             <Badge bg="primary">
//                 Primary
//             </Badge>{' '}
//             <Badge bg="secondary">
//                 Secondary
//             </Badge>{' '}
//             <Badge bg="success">
//                 Success
//             </Badge>{' '}
//             <Badge bg="danger">
//                 Danger
//             </Badge>{' '}
//             <Badge bg="warning" text="dark">
//                 Warning
//             </Badge>{' '}
//             <Badge bg="info">
//                 Info
//             </Badge>{' '}
//             <Badge bg="light" text="dark">
//                 Light
//             </Badge>{' '}
//             <Badge bg="dark">
//                 Dark
//             </Badge>
//         </div>
//     );
// }