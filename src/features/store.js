import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./Movies/Movileslice"
 export  const store = configureStore({
		reducer: {
			movies: moviesReducer,
		},
 });