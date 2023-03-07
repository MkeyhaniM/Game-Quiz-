import React, {useState, createContext} from "react";
import {HandelQuiz} from "./creatQuiz/HandelQuiz";
import {Quiz} from "../../quiz/quiz";
import {shuffle} from "./mixQuiz/mixQuestionAndAnswers"

const arr = shuffle(Quiz)

export const pro = createContext(null)


export function Game_quiz() {
    const [counterQuestion, setCounterQuestion] = useState(0);
    const [selectedQuiz, setSelectedQuiz] = useState(arr[counterQuestion]); // selected a quiz from sh_array[counterQuestion]
    const [sendInformationQuiz, setSendInformationQuiz] = useState({
        selectedQuiz,
        shuffledTests: shuffle(selectedQuiz.Test),
        Answer: selectedQuiz.Answer
    });
    function getNextQuiz() {
        setCounterQuestion(prevState => prevState + 1)
    }


    return (
        <pro.Provider value={sendInformationQuiz}>
            <HandelQuiz GET_N_Q={getNextQuiz} qc={counterQuestion}/>
        </pro.Provider>
    );
}