import { useTranslation } from "react-i18next";

//import idPic from "../media/pic/doki.jpg";
import profilePic from "../media/pic/profile.webp";
import "./About.scss";

const About = () => {
	const { t } = useTranslation();

	return (
		<section id="about">
			<div
				className="img-container"
				style={{ backgroundImage: `url(${profilePic})` }}
			></div>
			<div className="text-container">
				<h2>{t("about.title")}</h2>
				{t("about.content")
					.split("\n")
					.map(t => (
						<p key={t}>{t}</p>
					))}
			</div>
		</section>
	);
};

export default About;
