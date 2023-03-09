import { useState, createContext, useEffect } from "react";
import { HandelQuiz } from "./creatQuiz/HandelQuiz";
import { Quiz } from "../../quiz/quiz";
import { shuffle } from "./mixQuiz/mixQuestionAndAnswers";
import { useMemo } from "react";
import { InEndOfGame } from "./creatQuiz/inEndOfGame/inEndOfGame";
const arr = shuffle(Quiz);

export const pro = createContext(null);

export function Game_quiz() {
    const [counterQuestion, setCounterQuestion] = useState(0);
    const [SelectedQuiz, setSelectedQuiz] = useState(arr[counterQuestion]); // selected a quiz from sh_array[counterQuestion]
    const [sendInformationQuiz, setSendInformationQuiz] = useState({
        SelectedQuiz,
        ShuffledTests: shuffle(SelectedQuiz.Test),
        Answer: SelectedQuiz.Answer,
        NumberOfQuiz: counterQuestion
    });

    function getNextQuiz() {
        setCounterQuestion(prev => prev + 1)
    }

    useEffect(() => {
        setSelectedQuiz(arr[counterQuestion])
        setSendInformationQuiz({
            SelectedQuiz,
            ShuffledTests: shuffle(SelectedQuiz.Test),
            Answer: SelectedQuiz.Answer,
            NumberOfQuiz: counterQuestion
        })
    }, [counterQuestion, SelectedQuiz])

    useMemo(() => {
        if (counterQuestion > 10) {
            <FirstValue />
        }
    }, [counterQuestion, SelectedQuiz])


    function FirstValue() {
        if (counterQuestion < 100) {
            return (
                <pro.Provider value={sendInformationQuiz}>
                    <HandelQuiz GET_N_Q={getNextQuiz} qc={counterQuestion} />
                </pro.Provider>
            )
        } else {
            return <InEndOfGame />
        }
    }
    return (
        <FirstValue />
    );
}