import React from "react"

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

var shuffledQuestionArray = shuffle(Quiz);
var counterQuestion = 0;

function Q() {
    var selectedQuiz = shuffledQuestionArray[counterQuestion];
    var shuffledAnswerArray = shuffle(selectedQuiz.Test);
    var DA = selectedQuiz.DescriptionAboutAnswer ? selectedQuiz.DescriptionAboutAnswer : null;

    return (
        <>
            <CreateQ counterQuestion={counterQuestion + 1} name="mahyarKeyhani" question={selectedQuiz.Question}/>
            <Options Options={shuffledAnswerArray}/>
            <RadioOf/>
            <Container>
                <Row>
                    <Col>
                        <NextQuiz/>
                    </Col>
                    <Col>
                        <DescriptionOfQuestion DescriptionAnwser={DA}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export function HandelQuiz() {
    return (
        <div className={`container Quiz${counterQuestion}`}>
            <Q/>
        </div>
    )
}
