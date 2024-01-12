import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import { useDispatch } from 'react-redux';

import userReducer from "./user";

export const store = configureStore({
  reducer: {
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

// 参考：https://juejin.cn/post/7133404245310570526