import Header from "../components/Header";
//import InfoBoard from "../components/InfoBoard";
import About from "../components/About";
import Products from "../components/Products";
import Gallery from "../components/Gallery";
import Faq from "../components/Faq";

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
