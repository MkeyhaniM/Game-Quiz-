import {useState} from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

export function HandelCatch({massage}) {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>{massage}</Alert.Heading>
                <p>
                    CAN NOT SIGN UP , THERE IS A PROBLEM . IF YOU LOGINED IN PAST YOU SHOULD DELETE YOUR BROWSER
                    LOCALSTORAGE FROM SETTING
                </p>
            </Alert>
        );
    }
    return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}