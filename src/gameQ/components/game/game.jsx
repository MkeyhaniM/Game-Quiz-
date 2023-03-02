import React, {useState, createContext} from "react";
import {HandelQuiz} from "./creatQuiz/HandelQuiz";
import {Quiz} from "../../quiz/quiz";
import {shuffle} from "./mixQuiz/mixQuestionAndAnswers"

export const pro = createContext(null)

export function Game_quiz() {
    const [sh_array, setSh_array] = useState(shuffle(Quiz));
    const [counterQuestion, setCounterQuestion] = useState(0);
    const [selectedQuiz, setSelectedQuiz] = useState(sh_array[counterQuestion]);
    const sendInformationQuiz = {selectedQuiz, shuffledTests: shuffle(selectedQuiz.Test), counter: counterQuestion,Answer: selectedQuiz.Answer}


    return (
        <pro.Provider value={sendInformationQuiz}>
            <HandelQuiz qc={counterQuestion}/>
        </pro.Provider>
    )
}