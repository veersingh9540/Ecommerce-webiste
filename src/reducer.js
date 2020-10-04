//functioning of the data layer
export const GetBasketTotal = (basket) =>
basket.reduce((amount,item) => item.price + amount,0 );

export const initialState = {
    basket:[],
    user: null,
}
function reducer(state,action){
    switch(action.type){
        case 'SET USER':
            //logic for user login 
            return{
                ...state,
                user: action.user,
            }
        case 'ADD TO BASKET':
             //logic for adding item to basket
             return {
                 ...state,
                 basket:[...state.basket,action.item]
            }
            break;
        case 'REMOVE FROM BASKET':
            //logic for removing from basket 
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem)=> basketItem.id === action.id);

            if(index >= 0 ){
                //Item exists in the basket Remove it     
                newBasket.splice(index,1);
                
            }else {
                console.warn(
                    'cant remove the item (id: ${action.id}) as it is not in the basket'
                )
            }
            return {...state, basket: newBasket}
            break;
        default:
            return state;   
    }    
}
export default reducer;