import { useState, useContext } from "react";
import { CreateQ } from "./quiz/quizQuestion";
import { Options } from "./Options/options";
import { DescriptionOfQuestion } from "./descriptionOfQuestion/descriptionOfQuestion";
import { NextQuiz } from "./nextQuiz/nextQuiz";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RadioOf } from "./radioOf/radioOf";
import { pro } from "../game";
import { Score } from "./score/score";


function Q({ B_GET_N_Q }) {
    const context = useContext(pro);
    var DA = context.SelectedQuiz.DescriptionAboutAnswer ? context.SelectedQuiz.DescriptionAboutAnswer : null;
    const [indexClickedRadio, setIndexClickedRadio] = useState(null);
    const [checkDisabled, setCheckDisabled] = useState(false);

    function CheckAnswer(e) {
        setIndexClickedRadio(Number(e.target.getAttribute('data-index')));
        setCheckDisabled(true)
    }

    return (
        <>
            <CreateQ name="Mahyar-Keyhani" question={context.SelectedQuiz.Question} number={context.NumberOfQuiz}/>
            <Options Options={context.ShuffledTests} check={indexClickedRadio} Answer={context.Answer} />
            <RadioOf getDisabled={checkDisabled} selectedClientAnswer={CheckAnswer} />
            <Container>
                <Row>
                    <Col>
                        <NextQuiz B_GET_N_Q={B_GET_N_Q} check={checkDisabled} />
                    </Col>
                    <Col>
                        <DescriptionOfQuestion DescriptionAnswer={DA} />
                    </Col>
                </Row>
                <Score />
            </Container>
        </>
    )
}

export function HandelQuiz({ GET_N_Q }) {
    return (
        <div className={`container Quiz`}>
            <Q B_GET_N_Q={GET_N_Q} />
        </div>
    )
}