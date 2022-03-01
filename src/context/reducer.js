export let data = {
    correctCount:0,
    level:1

}

export function reducer(state, action) {
    switch (action.type) {
        case "SELECTED_LEVEL": {
            return {
                ...state,
                level: action.payload
            }
        }
        case "SET_SCORE": {
            return {
                ...state,
                correctCount: action.payload
            }
        }
        case "AUTH_USER": {
            return {
                ...state,
                authUser: action.payload
            }
        }

        case "UPDATE_SNACK": {
            return {
                ...state,
                snacks: action.payload
            }
        }
        case "UPDATE_LANGUAGE": {
            return {
                ...state,
                currentlan: action.payload
            }
        }
        case "UPDATE_DRINK": {
            return {
                ...state,
                drink: action.payload
            }
        }

        case "REGISTER_USER": {
            let usersClone = state.users.slice(0);
            usersClone.push(action.payload);
            return {
                ...state,
                users: usersClone
            }
        }
        default:
            return state;

    }
}