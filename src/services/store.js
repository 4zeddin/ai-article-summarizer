import {configureStore} from '@reduxjs/toolkit'


const store = configureStore({
  reducer: {},
  middleware: (GetDefaultMiddleware) => GetDefaultMiddleware().concat(),
});