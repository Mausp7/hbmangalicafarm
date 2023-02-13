import Grid from "@mui/material/Grid";

import Header from "../components/Header";
import InfoBoard from "../components/InfoBoard";
import About from "../components/About";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Hours from "../components/Hours";
import Emergency from "../components/Emergency";
import Contact from "../components/Contact";
import Map from "../components/Map";

const Home = () => {
	return (
		<>
			<Header />
			<InfoBoard />
			<About />
			<Services />
			<Gallery />
			<Grid container spacing={{ xs: 0 }}>
				<Emergency />
				<Hours />
				<Contact />
			</Grid>
			<Map />
		</>
	);
};

export default Home;
