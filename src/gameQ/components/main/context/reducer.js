import {TypeAction} from "./typeAction";

export let Reducer = (STATE, ACTION) => {
    switch (ACTION.type) {
        case TypeAction.LOGIN_REQUEST:
            return (
                {
                    ...STATE,
                    user: null,
                    token: null,
                    loading: true,
                    error: null,
                }
            )
            break;
        case TypeAction.LOGIN_SUCCESS:
            const {user, token} = ACTION.payload
            return (
                {
                    ...STATE,
                    user,
                    token,
                    loading: false,
                    error: null,
                }
            )
            break;
        case TypeAction.LOGIN_ERROR:
            const {error} = ACTION.payload
            return (
                {
                    ...STATE,
                    user: null,
                    token: null,
                    error,
                    loading: false,
                }
            )
            break;
        case TypeAction.LOGOUT :
            return (
                {
                    ...STATE,
                    user: null,
                    token: null,
                    loading: false,
                    error: null,
                }
            )
    }
}