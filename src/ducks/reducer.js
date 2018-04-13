const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: [],
    houses: []
}
const ADD_HOUSE = 'ADD_HOUSE';
const DELETE = 'DELETE';

export function addHouse(name, address, city, state, zip) {
    return {
        type: ADD_HOUSE,
        payload: name, address, city, state, zip
    }
}
export function deleteHouse(index){
    return {
        type: DELETE,
        payload: index
    }
}

export default function reducer(state = initialState, action){
    switch (action.type) {
        case ADD_HOUSE:
            return Object.assign({}, state, {houses: [...state.houses, action.payload]})
        case DELETE:
            let updatedList = state.houses.filter(
            (house, i) => {
                return i !== action.payload
            })
            return {
                houses: updatedList
            }
        default:
        return state;
    }
}