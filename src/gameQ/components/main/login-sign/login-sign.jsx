import {FormLogin} from "./login/login";
import {FormSign} from "./sign/sign";

function checkUserLogined() {
    if (localStorage.getItem("Game-Quiz")) {
        return true;
    } else {
        return false;
    }
}

export function FormLoginSign() {
    const check = checkUserLogined() ? <FormLogin/> : <FormSign/>;
    return <div>{check}</div>
}
 