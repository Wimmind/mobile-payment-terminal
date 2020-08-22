export default function (state, action) {
    switch (action.type) {
        case 'add':
            return [
                ...state,{
                    id: Date.now(),
                    name: 'yota',
                    completed: false
                }
            ]
        case 'toggle':
            return state.map(operator => {
                if  (operator.id === action.id) {
                    operator.completed = !operator.completed
                }
                return operator;
            })
        case 'remove':
            return state.filter(operator=>{
                return operator.id !== action.id
            })
        default:
            return state
    }
}