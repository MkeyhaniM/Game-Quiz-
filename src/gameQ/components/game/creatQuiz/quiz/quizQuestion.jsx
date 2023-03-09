import Alert from 'react-bootstrap/Alert';
import Badge from "react-bootstrap/Badge";

export function CreateQ({ question, number }) {
    return (
        <Alert variant="secondary">
            <Badge className='d-inline-block m-2' bg="secondary">
                {number + 1}
            </Badge>
            <p className='d-inline f'>
                {question}
            </p>
        </Alert>);
}