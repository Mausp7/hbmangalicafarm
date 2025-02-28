import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useTranslation } from "react-i18next";

import pic1 from "../media/pic/gallery/1.jpg";
import pic2 from "../media/pic/gallery/2.jpg";
import pic3 from "../media/pic/gallery/3.jpg";
import pic4 from "../media/pic/gallery/4.jpg";
import pic5 from "../media/pic/gallery/5.jpg";

import "./Gallery.scss";

const Gallery = () => {
	const { t } = useTranslation();

	const pictures = [
		{ title: "", src: pic1 },
		{ title: "", src: pic2 },
		{ title: "", src: pic3 },
		{ title: "", src: pic4 },
		{ title: "", src: pic5 },
	];

	const responsive = {
		desktop: {
			breakpoint: { max: 3000, min: 1200 },
			items: 3,
			slidesToSlide: 1,
		},
		tablet: {
			breakpoint: { max: 1199, min: 800 },
			items: 2,
			slidesToSlide: 1,
		},
		mobile: {
			breakpoint: { max: 799, min: 0 },
			items: 1,
			slidesToSlide: 1,
		},
	};

	return (
		<section id="gallery">
			<h2>{t(`gallery`)}</h2>
			<Carousel
				swipeable={true}
				draggable={false}
				showDots={false}
				responsive={responsive}
				infinite={true}
				autoPlay={false}
				autoPlaySpeed={5000}
				keyBoardControl={true}
				customTransition="transform 400ms ease-in-out"
				transitionDuration={400}
				containerClass="carousel-container"
				itemClass="carousel-item"
				removeArrowOnDeviceType={[]}
				renderDotsOutside={false}
				centerMode={false}
			>
				{pictures.map(pic => (
					<div key={pic.title}>
						<img src={pic.src} alt={pic.title} style={{height: "300px"}}/>
					</div>
				))}
			</Carousel>
		</section>
	);
};

export default Gallery;
