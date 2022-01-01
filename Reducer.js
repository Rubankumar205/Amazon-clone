export const initialState = {
    basket : [],
    user : null,
}

const reducer = (state,action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
           return{
               ...state,
               basket : [...state.basket,action.item]
           }
        case 'REMOVE_FROM_BASKET' : 
        const tempArray = [...state.basket];
        let firstIndex=state.basket.findIndex(basketitem => basketitem.id===action.id);
        if(firstIndex>=0){
            tempArray.splice(firstIndex,1);
        }
           return{
               ...state,
               basket:[...tempArray]

           }
        case 'SET_USER' : 
           return({
               ...state,
               user:action.user,
           })
        default:
            break;
    }
}
export default reducer