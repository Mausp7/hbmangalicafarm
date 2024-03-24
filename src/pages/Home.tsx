import Grid from "@mui/material/Grid";

import Header from "../components/Header";
//import InfoBoard from "../components/InfoBoard";
import About from "../components/About";
import Products from "../components/Products";
import Gallery from "../components/Gallery";
import Hours from "../components/Hours";
import Emergency from "../components/Emergency";
import Contact from "../components/Contact";
import Faq from "../components/Faq";
import GoogleMap from "../components/GoogleMap";

const Home = () => {
	return (
		<>
			<Header />
			{/*<InfoBoard />*/}
			<About />
			<Products />
			<Gallery />
			<Faq />
		</>
	);
};

export default Home;
