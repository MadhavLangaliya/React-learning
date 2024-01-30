import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./Pages";
import About from "./Pages/about";
import Events from "./Pages/events";
import AnnualReport from "./Pages/annual";
import Teams from "./Pages/team";
import Blogs from "./Pages/blogs";
import SignUp from "./Pages/signup";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route
					path="/events"
					element={<Events />}
				/>
				<Route
					path="/annual"
					element={<AnnualReport />}
				/>
				<Route path="/team" element={<Teams />} />
				<Route path="/blogs" element={<Blogs />} />
				<Route
					path="/sign-up"
					element={<SignUp />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
