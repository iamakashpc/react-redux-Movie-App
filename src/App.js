import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/movie/:imdbID" element={<MovieDetails />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
