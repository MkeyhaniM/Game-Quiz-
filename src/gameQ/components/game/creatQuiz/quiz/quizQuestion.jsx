import Alert from 'react-bootstrap/Alert';
import Badge from "react-bootstrap/Badge";
import React from "react";

export function CreateQ({question, name, counterQuestion}) {
    return (
        <Alert variant="secondary">
            {/*<Alert.Heading>Hey, {name}</Alert.Heading>*/}
            <Badge className='d-inline-block m-2' bg="secondary">
                {counterQuestion}
            </Badge>
            <p className='d-inline f'>
                {question}
            </p>
        </Alert>);
}