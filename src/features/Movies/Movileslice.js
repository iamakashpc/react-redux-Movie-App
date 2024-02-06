import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../common/Api/MovieApi";
import { ApiKey } from "../../common/Api/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
	"movies/fetchAsyncMovies",
	async (term) => {
		
		const response = await MovieApi.get(
			`?apiKey=${ApiKey}&s=${term}&type=movie`
		);
		return response.data;
	}
);
export const fetchAsyncShows = createAsyncThunk(
	"movies/fetchAsyncShows",
	async (term) => {
		
		const response = await MovieApi.get(
			`?apiKey=${ApiKey}&s=${term}&type=series`
		);
		return response.data;
	}
);
export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
	"movies/fetchAsyncMovieOrShowDetail",
	async (id) => {
		const response = await MovieApi.get(`?apiKey=${ApiKey}&i=${id}&Plot=full`);
		return response.data;
	}
);

const initialState = {
	movies: {},
	shows: {},
	selectMovieOrShow: {},
};

const movieSlice = createSlice({
	name: "movies",
	initialState,
	reducers: {
		removeSelectedMovieOrShow: (state) => {
			state.selectMovieOrShow = {};
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAsyncMovies.pending, (state) => {
				console.log("Pending");
			})
			.addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
				console.log("Fetched Successfully!");
				state.movies = payload;
			})
			.addCase(fetchAsyncMovies.rejected, (state) => {
				console.log("Rejected!");
			})
			.addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
				console.log("Fetched Successfully!");
				state.shows = payload;
			})
			.addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state, action) => {
				console.log("Fetched Successfully!");
				return { ...state, selectMovieOrShow: action.payload };
			});
	},
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getMovieOrShowDetail = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;
