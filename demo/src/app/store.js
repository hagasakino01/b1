import { configureStore } from '@reduxjs/toolkit';

import yourPostReducer from '../features/yourPost/yourPostSlice';
import inputYourPostReducer from '../features/yourPost/inputYourPostSlice';
import postReducer from '../features/Posts/postSlice'
export const store = configureStore({
    reducer: {
        yourPost: yourPostReducer,
        inputYourPost : inputYourPostReducer,
        post: postReducer
    },
});