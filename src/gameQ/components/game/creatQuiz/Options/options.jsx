import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, {Fragment, useState} from "react";


export function Options(props) {
    const word = ['A', 'B', 'C', 'D']
    const background = ['bg-success', 'bg-danger', 'bg-light']

    function CreateOption({CounterWord, index, background, det, isCorrect}) {

        function getCorrectOption() {
            if (isCorrect) {
                return (
                    <Fragment>
                        <Col className={`p-2 m-1 border border-opacity-10 bg-opacity-100 ${background} `}>
                            <Badge style={{fontSize: '15px'}} bg="secondary">
                                {CounterWord}
                            </Badge>{' '}
                            {props.Options[index]}
                        </Col>
                    </Fragment>
                )
            } else if (!isCorrect) {
                console.log(det)
                if (props.Options[index] !== det.first) {
                    console.log('hello')
                }
                return (
                    <Fragment>
                        <Col className={`p-2 m-1 border border-opacity-10 bg-opacity-100 ${background} `}>
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
                {/*<Col className={`p-2 m-1 border border-opacity-10 bg-opacity-100 ${background} `}>*/}
                {/*    <Badge style={{fontSize: '15px'}} bg="secondary">*/}
                {/*        {CounterWord}*/}
                {/*    </Badge>{' '}*/}
                {/*    {props.Options[index]}*/}
                {/*</Col>*/}
                {getCorrectOption()}
            </Fragment>
        )
    }

    console.log(props.Answer)

    function CheckTypeOfOperation() {

        if (props.check == null) {
            return word.map((Op, index) => {
                return (
                    <Fragment key={index + Op}>
                        <CreateOption CounterWord={Op} backround={background[2]} index={index}/>
                    </Fragment>
                )
            })
        } else {
            const getCorrectOption = props.Options.map((get_C_Option, indexGetCorrectOp) => {
                if (props.Options[indexGetCorrectOp] == props.Answer) {
                    return {details: {first: indexGetCorrectOp, second: props.Answer}}
                }
            })
            return word.map((Op, index) => {
                if (props.Options[props.check] === props.Answer && index === props.check) {
                    return (
                        <Fragment key={index + Op}>
                            <CreateOption isCorrect={true} CounterWord={Op} background={background[0]} index={index}/>
                        </Fragment>
                    )
                } else if (props.Options[props.check] !== props.Answer && index === props.check) {
                    var details;
                    getCorrectOption.forEach(e => {
                        if (e) {
                            details = e
                        }
                    })
                    return (
                        <Fragment key={index + Op}>
                            <CreateOption isCorrect={false} CounterWord={Op} det={details} background={background[1]}
                                          index={index}/>
                        </Fragment>
                    )
                } else {
                    return (
                        <Fragment key={index + Op}>
                            <CreateOption isCorrect={false} CounterWord={Op} background={background[2]} index={index}/>
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