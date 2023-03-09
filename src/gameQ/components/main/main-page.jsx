import {Fragment} from "react";

import {FormLoginSign} from "./login-sign/index";
import {Title} from "./titleOfGameQuiz/title";
import {ContextOfGameQuiz} from "../context/contextGameQuiz";


export function MainPage() {
    return (
        <Fragment>
            <Title/>
            <ContextOfGameQuiz>
                <FormLoginSign/>
            </ContextOfGameQuiz>
        </Fragment>
    );
}
