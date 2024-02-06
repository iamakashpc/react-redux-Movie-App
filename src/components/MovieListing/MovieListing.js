import React from "react";
import Slider from "react-slick";
import { Settings } from "../../common/settings";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/Movies/Movileslice";
import MovieCard from "../MovieCard/MovieCard";
import "./movielisting.scss";
const MovieListing = () => {
	const movies = useSelector(getAllMovies);
	const shows = useSelector(getAllShows);

	let renderMovies,
		renderShows = "";

	renderMovies =
		movies.Response === "True" ? (
			movies.Search.map((movie, index) => (
				<MovieCard key={index} data={movie} />
			))
		) : (
			<div className="movie-error">
				<h3>{movies.Error}</h3>
			</div>
		);
	renderShows =
		shows.Response === "True" ? (
			shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
		) : (
			<div className="movie-error">
				<h3>{shows.Error}</h3>
			</div>
		);

	return (
		<div className="movie-wrapper">
			<div className="movie-list">
				<h2 className="list">Movies</h2>
				<div className="movie-container">
					<Slider {...Settings}>{renderMovies}</Slider>
				</div>
			</div>
			<div className="movie-list">
				<h2 className="list">Series</h2>
				<div className="movie-container">
					
					<Slider {...Settings}>{renderShows}</Slider>
				</div>
			</div>
		</div>
	);
};

export default MovieListing;
