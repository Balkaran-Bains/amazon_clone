export const initialState={
    basket :[],
    user: null
};

// selector
export const getBasketTotal =(basket)=> basket?.reduce((amount, item)=> item.price +amount, 0);




const reducer =(state,action) =>{
    console.log(action);
    switch(action.type){
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket: [...state.basket, action.item],
            };
            case 'Remove_From_Basket':
                const index =state.basket.findIndex(
                    (basketItems)=> basketItems.id===action.id
                );

                let newBasket =[...state.basket];

                if(index>=0){
                    newBasket.splice(index,1);
                } else {
                    console.warn(
                        `Can't remove product(id:${action.id}) as its not in basket!`
                    )
                }

                return{
                    ...state,
                    basket:newBasket
                }

                case "SET_USER":

                return {
                    ...state,
                    user : action.user
                }

            default:
                return state;
    }
};

export default reducer;