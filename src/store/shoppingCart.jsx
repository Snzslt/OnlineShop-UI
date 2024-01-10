import {createContext} from 'react';


// the value can be any kind that we want
export const CartContext = createContext({
    items: [],
    addItemToCart: () => {},
});