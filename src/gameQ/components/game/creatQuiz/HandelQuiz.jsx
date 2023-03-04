import React, {useState, useContext} from "react";
import {Quiz} from "../../../quiz/quiz";
import {shuffle} from "../mixQuiz/mixQuestionAndAnswers";
import {CreateQ} from "./quiz/quizQuestion"
import {Options} from "./Options/options";
import {DescriptionOfQuestion} from "./descriptionOfQuestion/descriptionOfQuestion";
import {NextQuiz} from "./nextQuiz/nextQuiz";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {RadioOf} from "./radioOf/radioOf";
import {pro} from "../game";
import {Score} from "./score/score";


function Q() {
    const context = useContext(pro);
    var DA = context.selectedQuiz.DescriptionAboutAnswer ? context.selectedQuiz.DescriptionAboutAnswer : null;
    const [indexClickedRadio, setIndexClickedRadio] = useState(null);
    const [checkDisabled, setCheckDisabled] = useState(false);

    function CheckAnswer(e) {
        setIndexClickedRadio(Number(e.target.getAttribute('data-index')));
        setCheckDisabled(true)
    }

    return (
        <>
            <CreateQ counterQuestion={context.counter + 1} name="Mahyar-Keyhani"
                     question={context.selectedQuiz.Question}/>
            <Options Options={context.shuffledTests} check={indexClickedRadio} Answer={context.Answer}/>
            <RadioOf getDisabled={checkDisabled} selectedClientAnswer={CheckAnswer}/>
            <Container>
                <Row>
                    <Col>
                        <NextQuiz/>
                    </Col>
                    <Col>
                        <DescriptionOfQuestion DescriptionAnswer={DA}/>
                    </Col>
                </Row>
                <Score/>
            </Container>
        </>
    )
}

export function HandelQuiz() {
    const context = useContext(pro);
    return (
        <div className={`container Quiz${context.counter}`}>
            <Q/>
        </div>
    )
}