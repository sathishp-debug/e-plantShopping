import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
const cartQuantity = useSelector(state => state.cart.items.reduce((total, item) => total + item.quantity, 0));
 const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
export default store
