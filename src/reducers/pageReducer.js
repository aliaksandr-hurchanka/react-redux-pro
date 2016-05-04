
const pageReduser = (state = [], action) => {
    switch (action.type) {
        case 'ADD_SERVICE':
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title
                }
            ]

        default:
            return state
    }
}

export default pageReduser
