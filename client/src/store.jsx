const ADD_ITEM='cartItem/add'
const REMOVE_ITEM='cartItem/remove'

const initialState={
    items:[],
}

const cartItemReducer = (state = initialState, action)=>{
    switch (action) {
        case ADD_ITEM:
            
            return{
                ...state,
                items: [...state.items, action.payload],

            };


        case REMOVE_ITEM:
            return{
                items: state.items.filter(item=>item.id!==action.payload),
            };

    
        default:
            return state;
    }
}