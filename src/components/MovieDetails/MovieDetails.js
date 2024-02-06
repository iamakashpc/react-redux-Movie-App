import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
	fetchAsyncMovieOrShowDetail,
	getMovieOrShowDetail,
  removeSelectedMovieOrShow,
} from "../../features/Movies/Movileslice";
import "./moviedetails.scss";

const MovieDetails = () => {
	const { imdbID } = useParams();
	const dispatch = useDispatch();
	const data = useSelector(getMovieOrShowDetail);

	useEffect(() => {
		dispatch(fetchAsyncMovieOrShowDetail(imdbID));
     return () => {
      dispatch(removeSelectedMovieOrShow());
    };
	}, [dispatch, imdbID]);

	return (
		<div className="movie-section">
    {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
			<>
				<div className="section-left">
					<div className="movie-title">{data.Title}</div>
					<div className="movie-rating">
						<span>
							<i className="fa fa-star"></i> Rating⭐: {data.imdbRating}
						</span>
						<span>
							<i className="fa fa-thumbs-up"></i>IMDB Votes👍: {data.imdbVotes}
						</span>
						<span>
							<i className="fa fa-film"></i> Runtime⏲️: {data.Runtime}
						</span>
						<span>
							<i className="fa fa-calendar"></i> Year📅: {data.Year}
						</span>
					</div>

					<div className="movie-plot"> Plot : {data.Plot}</div>
					<div className="movie-info">
						<div>
							<span>Director✍️:</span>
							<span> {data.Director}</span>
						</div>
						<div>
							<span>Stars🎭:</span>
							<span> {data.Actors}</span>
						</div>
						<div>
							<span>Genres😎:</span>
							<span> {data.Genre}</span>
						</div>
						<div>
							<span>Languages📝:</span>
							<span> {data.Language}</span>
						</div>
						<div>
							<span>Awards🎗️:</span>
							<span> {data.Awards}</span>
						</div>
					</div>
				</div>
				<div className="section-right">
					<img src={data.Poster} alt={data.Title} />
				</div>
			</>
      )}
		</div>
	);
};

export default MovieDetails;
