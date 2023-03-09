import {Fragment} from "react";
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {CheckTypeOfAnswer} from "../score/score";

export function Options(props) {
    const word = ['A', 'B', 'C', 'D'];
    const backgroundDefault = ['bg-success', 'bg-danger', 'bg-light'];

    function CreateOption({CounterWord, index, background, isCorrect}) {
        function getCorrectOption() {
            if (isCorrect == null) {
                return (
                    <Fragment>
                        <Col className={`p-2 m-1 border border-opacity-10 bg-opacity-100 text-primary ${background} `}>
                            <Badge className='bg-opacity-25' style={{fontSize: '15px'}} bg="secondary">
                                <span className='text-primary'>{CounterWord}</span>
                            </Badge>{' '}
                            {props.Options[index]}
                        </Col>
                    </Fragment>
                )
            } else if (!isCorrect) {
                const assignDetailsFromWindow = window.keepDetails
                return (
                    <Fragment>
                        <Col
                            className={`p-2 m-1 border border-opacity-10 bg-opacity-100$ ${assignDetailsFromWindow[1] === index ? backgroundDefault[0] : background}  `}>
                            <Badge style={{fontSize: '15px'}} bg="secondary">
                                {CounterWord}
                            </Badge>{' '}
                            {props.Options[index]}
                        </Col>
                    </Fragment>)
            } else if (isCorrect) {
                return (
                    <Fragment>
                        <Col
                            className={`p-2 m-1 border border-opacity-10 bg-opacity-100 text-bg-warning ${backgroundDefault[0]} `}>
                            <Badge style={{fontSize: '15px'}} bg="secondary">
                                {CounterWord}
                            </Badge>{' '}
                            {props.Options[index]}
                        </Col>
                    </Fragment>
                )
            }
        }

        return (
            <Fragment>
                {getCorrectOption()}
            </Fragment>
        )
    }

    function Details(option, ca) {
        word.map((e, index) => {
            if (option[index] === ca) {
                window.keepDetails = [option[index], index]
            }
        })
    }
    function CheckTypeOfOperation() {
        Details(props.Options, props.Answer)
        if (props.check == null) {
            return word.map((Op, index) => {
                return (<Fragment key={index + Op}>
                    <CreateOption isCorrect={null} CounterWord={Op} backround={backgroundDefault[2]} index={index}/>
                </Fragment>)
            })
        } else {
            return word.map((Op, index) => {
                if (props.Options[props.check] === props.Answer && index === props.check) {
                    CheckTypeOfAnswer({type: 'correctAnswer', score: 10})
                    return (
                        <Fragment key={index + Op}>
                            <CreateOption isCorrect={true} CounterWord={Op} background={backgroundDefault[0]}
                                          index={index}/>
                        </Fragment>
                    )
                } else if (props.Options[props.check] !== props.Answer && index === props.check) {
                    CheckTypeOfAnswer({type: 'wrongAnswer', score: 0})
                    return (
                        <Fragment key={index + Op}>
                            <CreateOption isCorrect={false} CounterWord={Op} background={backgroundDefault[1]}
                                          index={index}/>
                        </Fragment>
                    )
                } else {
                    return (
                        <Fragment key={index + Op}>
                            <CreateOption isCorrect={false} CounterWord={Op} background={backgroundDefault[2]}
                                          index={index}/>
                        </Fragment>
                    )
                }
            })
        }
    }

    return (
        <Container>
            <Row>
                <CheckTypeOfOperation/>
            </Row>
        </Container>
    );
}