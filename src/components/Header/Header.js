import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png"
import "./header.scss"
import { fetchAsyncMovies, fetchAsyncShows } from "../../features/Movies/Movileslice";
import { useDispatch } from "react-redux";
const Header = () => {

	const [term, setTerm] = useState("");
	const dispatch = useDispatch();

	 const submitHandler = (e) => {
			e.preventDefault();
			if (term === "") return alert("Please enter search term!");
			dispatch(fetchAsyncMovies(term));
			dispatch(fetchAsyncShows(term));
			setTerm("");
		};
	return (
		<div className="header">
			<Link to="/">
				<div className="logo">RR MOVIES</div>
			</Link>
			<div className="search-bar">
				<form onSubmit={submitHandler}>
					<input
						type="text"
						value={term}
						placeholder="Search Movies or Shows"
						onChange={(e) => setTerm(e.target.value)}
					/>
					<button type="submit">
						<i className="fa-search">submit</i>
					</button>
				</form>
			</div>
			<div className="user-image">
				<img src={user} alt="user" />
			</div>
		</div>
	);
};

export default Header;
