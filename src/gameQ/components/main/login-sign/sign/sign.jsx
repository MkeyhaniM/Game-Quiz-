import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {FetchPost} from "../operationOfRequest/axiosOperation";
import {HandelCatch} from "./handelCatch/handelCatch";
import {ContextDispatchOfReducer} from '../../../context/contextGameQuiz';

export function FormSign() {
    const dispatch = ContextDispatchOfReducer()
    const [existUser, setExistUser] = useState(null);
    const [user, setUser] = useState(null);
    const [personalInformation, setPersonalInformation] = useState({
        email: null,
        password: null,
        number: null,
        country: null,
    });

    let doSubmit = (e) => {
        e.preventDefault();

        FetchPost(personalInformation)
            .then(({data, success, token}) => {
                if (success) {
                    setExistUser(token)
                    setUser(data)
                }
                dispatch(
                    {
                        type: "LOGIN_REQUEST"
                    }
                )
            })
            .catch(error => {
                dispatch(
                    {
                        type: "LOGIN_ERROR",
                        payload: {
                            error: {error}
                        }
                    }
                )
                // <HandelCatch massage={error}/>
            })
    }

    useEffect(() => {
        if (existUser) {
            dispatch(
                {
                    type: "LOGIN_SUCCESS",
                    payload: {
                        user: user.email,
                        token: existUser
                    }
                }
            )
        }
    }, [existUser, dispatch])

    return (
        <Form>
            <Row>
                <Form.Group
                    as={Col}
                    className="col-gl-6 mb-3"
                    controlId="formBasicEmail"
                >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        onChange={(e) => setPersonalInformation({...personalInformation, email: e.target.value})}
                        type="email"
                        placeholder="Enter email"
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group as={Col} className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        onChange={(e) => setPersonalInformation({...personalInformation, password: e.target.value})}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Group>
            </Row>

            <Row className="mb-2">
                <Form.Group as={Col}>
                    <Form.Label>Number</Form.Label>
                    <Form.Control
                        onChange={(e) => setPersonalInformation({...personalInformation, number: e.target.value})}
                        type="number"
                        placeholder="+9924642316"
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label htmlFor="disabledSelect">
                        Which country do you want to play ?
                    </Form.Label>
                    <Form.Select
                        onChange={(e) => setPersonalInformation({...personalInformation, country: e.target.value})}
                        id="disabledSelect"
                    >
                        <option>Disabled select</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Canada">Canada</option>
                        <option value="China">China</option>
                        <option value="England">England</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                        <option value="Iran">Iran</option>
                        <option value="Japan">Japan</option>
                        <option value="Russia">Russia</option>
                        <option value="Spain">Spain</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="United Arab Emirates">United Arab Emirates</option>
                    </Form.Select>
                </Form.Group>
            </Row>

            <Row className="md-1 mt-3">
                <Form.Group as={Col} controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out"/>
                </Form.Group>
            </Row>
            <Button className="mt-4 text text-center" variant="success" onClick={e => doSubmit(e)} type="submit">
                Create an account
            </Button>
        </Form>
    );
}
