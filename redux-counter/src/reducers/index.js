import * as types from '../actions/ActionTypes';

const initialState = {
    counters: [
        {
            color: 'black',
            number: 0
        }
    ]
}

function counter(state = initialState, action) {
    const {counters} = state;

    switch (action.type) {
        case types.CREATE:
            return{
                counters: [
                    ...counters,
                    {
                        color: action.color,
                        number: 0
                    }
                ]
            };
        case types.REMOVE:
            return {
                counters: counters.slice(0, counters.length -1)
            };

        case types.INCREMENT:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number: counters[action.index].number +1
                    },
                    ...counters.slice(action.index +1 , counters.length)
                ]
            };    
        
        case types.DECREMENT:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number: counters[action.index].number -1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            };
        
        case types.SET_COLOR:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        color: action.color
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            };
        default:
            return state;
        }
}




// const initialState = {
//     color: 'black',
//     number: 0
// };

// function counter(state = initialState, action) {
//     switch(action.type) {
//         case types.INCREMENT:
//             return {
//                 ...state,
//                 number: state.number +1
//             };
//         case types.DECREMENT:
//             return {
//                 ...state,
//                 number: state.number -1
//             };
//         case types.SET_COLOR:
//             return {
//                 ...state,
//                 color: action.color
//             };
//         default:
//             return state;    
//     }
// }

// const reducers = combineReducers({
//     numberData: number,
//     colorData: color
// });

export default counter;