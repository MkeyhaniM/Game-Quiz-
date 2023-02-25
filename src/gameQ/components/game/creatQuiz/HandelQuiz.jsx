import React, {useState, useEffect} from "react";
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

var shuffledQuestionArray = shuffle(Quiz)
var counterQuestion = 0;


function showAnswerInOptions(ICR, CA, SAA) {
    for (var i = 0; i < SAA.length; i++) {
        if (SAA[ICR] === CA) {
            console.log("hello")
            return (<Options getCorrect={true} Options={SAA[ICR]}/>)
            break;
        } else {
            console.log("bye")
            return (<Options getCorrect={false} Options={SAA}/>)
            break;
        }
    }
}

function Q() {
    const [indexClickedRadio, setIndexClickedRadio] = useState(-1);
    const [condition, setCondition] = useState(false);
    const [selectedQuiz, setSelectedQuiz] = useState(shuffledQuestionArray[counterQuestion]);
    const [conrrectAnswer, setConrrectAnswer] = useState(selectedQuiz.Answer);
    const [shuffledAnswerArray, setShuffledAnswerArray] = useState(shuffle(selectedQuiz.Test));
    var DA = selectedQuiz.DescriptionAboutAnswer ? selectedQuiz.DescriptionAboutAnswer : null;

    function CheckAnwser(e) {
        setIndexClickedRadio(Number(e.target.getAttribute('data-index')));
        setCondition(true)
    }

    return (<>
        <CreateQ counterQuestion={counterQuestion + 1} name="mahyarKeyhani" question={selectedQuiz.Question}/>

        {condition && showAnswerInOptions(indexClickedRadio, conrrectAnswer, shuffledAnswerArray)}
        {!condition && <Options getCorrect={null} Options={shuffledAnswerArray}/>}

        <RadioOf selectedClicetAnswer={CheckAnwser}/>
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
    </>)
}

export function HandelQuiz() {
    return (<div className={`container Quiz${counterQuestion}`}>
        <Q/>
    </div>)
}